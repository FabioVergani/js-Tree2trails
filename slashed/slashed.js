(w=>{
	const d=w.document,
	paths=[],
	uri=[],
	f=(s,e)=>{
		if('string' !== typeof e){
			let a=e[0],p=s;
			const b=e[1];
			if(b){
				p=paths[paths.length]=s.concat(a).flat(Infinity);
				a=b
			};
			for(const x of a){f(p,x)}
		}else{
			uri[uri.length]=s.concat(e).join('/')
		}
	};
	//
	for(const e of JSON.parse(d.currentScript.dataset.deps)){
		f(['.'],e)
	}
	//
	console.log('paths:%O',paths);
	paths.length=0
	console.log('uri:%O',uri);
})(window);

/*
		<script src="./init.js" data-deps='[
			[
				[
					"file01.js",
					"file02.js"
				]
			],
			[
				"dir1",
				[
					"file11.js",
					"file12.js"
				]
			],
			[
				"dir2",
				[
					"file21.js",
					"file22.js",
					[
						"dir22",
						[
							"file221.js",
							[
								"dir222",
								[
									"file2221.js",
									"file2222.js"
								]
							]
						]
					]
				]
			],
			[
				"dirX",
				[
					"fileX1",
					"fileX2"
				]
			]
		]'></script>
*/
