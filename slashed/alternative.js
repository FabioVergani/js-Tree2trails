(w=>{
	const onceAt=w.onceAt||(w.onceAt=(e,n,c)=>{
		const f=o=>{e.removeEventListener(n,f);c(o)};
		e.addEventListener(n,f);
		return f
	}),
	deps=[],
	toScripts=(e,s)=>{
		for(const a of e){
			if('string'!==typeof a){
				toScripts(a[1],[s,a[0]])
			}else{
				deps.push([s,a])
			}
		}
	},
	{
		Promise:P,
		document:d
	}=w,
	frag=new w.DocumentFragment();

	toScripts(JSON.parse(d.currentScript.dataset.deps),'./');

	deps.forEach((v,i,m)=>{
		const e=frag.appendChild(d.createElement('script'));
		e.src=v.flat(Infinity).join('');
		m[i]=new P((resolve,reject)=>{
			onceAt(e,'load',resolve);
			onceAt(e,'error',reject)
		})
	});

	d.head.append(frag);

	P.all(deps).then(()=>{
		deps.length=0;
		const f=()=>{w.dispatchEvent(new Event('demoCanStart'))};
		if(d.readyState!=='complete'){
			onceAt(w,'load',f)
		}else{
			f({target:w})
		}
	}).catch(e=>{
		w.stop()
	})
})(window);
/*

demo.js
onceAt(window,'demoCanStart',({target:w})=>{
	console.group('demo');
	console.log('ready');//deps loaded & readyState complete..
	const {onceAt,document:$d}=w,
	$id=x=>$d.getElementById(x);
	console.groupEnd('demo')
});

<!DOCTYPE html>
<html lang="en" translate="no" spellcheck="false">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Demo</title>
		<link rel="stylesheet" href="./demo.css">
		<script src="./res/script/init.js" data-deps='[
			[
				"./res/script/",
				[
					"contextMenu.js"
				]
			],[
				"./",
				[
					"demo.js"
				]
			]
		]'></script>
	</head>
	<body>
		<main>
			<article id='content' style='visibility:hidden'>
				<h2>Demo</h2>
				<!-- ... -->
			</article>
		</main>
	</body>
</html>
*/
