const treeArray2trails=o=>{
	const m=[],
	f=(b,s)=>{//slot,trail,i:depth
		for(const a of b){
			if('string'!==typeof a){//expected isArray
				f(a[1],s+a[0])//,1+i
			}else{
				m[m.length]=s+a
			}
		}
	};
	f(o,'');//,0
	return m
}