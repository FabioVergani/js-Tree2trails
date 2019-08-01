const treeObj2trails=(w=>{
	const isArray=w.Array.isArray,entries=w.Object.entries;
	return x=>{
		const m=[];
		f=(o,s)=>{//slot,trail
			if('string'!==typeof o){
				if(isArray(o)){
					o.forEach(e=>{f(e,s)})
				}else{
					for(const [p,v] of entries(o)){
						f(v,s+p)
					}
				}
			}else{
				m[m.length]=s+o
			}
		};
		f(x,'');
		return m
	}
})(window);