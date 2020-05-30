(w=>{
	const d=w.document,
	m=[],
	f=(b,s)=>{for(const a of b){if('string'!==typeof a){f(a[1],[s,a[0]])}else{m[m.length]=[s,a]}}};
	f(JSON.parse(d.currentScript.dataset.deps),'./');
	m.forEach((v,i,m)=>{
		const s=v.flat(Infinity).join('');
		//console.log(s);
	})
	console.log('paths:%O',m);
	//m.length=0;
})(window);

/*
(w=>{
	const d=w.document,
	m=[],
	f=(b,s)=>{
		for(const a of b){
			if('string'!==typeof a){
				f(a[1],[s,a[0]])
			}else{
				m[m.length]=[s,a]
			}
		}
	};
	f(JSON.parse(d.currentScript.dataset.deps),'./');
	m.forEach((v,i,m)=>{
		const s=v.flat(Infinity).join('');
		//console.log(s);
	})
	console.log('paths:%O',m);
	//m.length=0;
})(window);
*/
