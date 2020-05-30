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
		w.dispatchEvent(new Event('depsLoaded'))
	}).catch(e=>{
		w.stop();
		console.info('deps error',e)
	})
})(window);
