(w=>{
	const onceAt=(e,n,c)=>{
		const f=o=>{e.removeEventListener(n,f);c(o)};
		e.addEventListener(n,f);
		return f
	},
	drop=(o,n)=>{
		const e=o.currentTarget,i=n+'Handler';
		e.removeEventListener(n,e[i]);
		e[i]=null
	},
	depOnLoad=e=>{drop(e,'error')},
	depOnError=e=>{drop(e,'load');w.stop()},
	frag=new DocumentFragment(),
	m=[],
	f=(b,s)=>{
		for(const a of b){
			if('string'!==typeof a){
				f(a[1],[s,a[0]])
			}else{
				m[m.length]=[s,a]
			}
		}
	},
	d=w.document;

	f(JSON.parse(d.currentScript.dataset.),'./');

	m.forEach((v,i,m)=>{
		const e=frag.appendChild(d.createElement('script'));
		e.loadHandler=onceAt(e,'load',depOnLoad);
		e.errorHandler=onceAt(e,'error',depOnError);
		e.src=v.flat(Infinity).join('')
	});

	m.length=0;

	d.head.append(frag)
})(window);
