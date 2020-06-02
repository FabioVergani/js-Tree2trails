/*
const n=Infinity, m=[];
const f=(e,s)=>{
			if('s'!==(typeof e)[0]){
				for(const x of e){
					if('s'!==(typeof x)[0]){
						if(x.length){
							f(x[1],[s,x[0]])
						}else{
							m[m.length]=[s,x]
						}
					}else{
						m[m.length]=[s,x]
					}
				}
			}else{
				 m[m.length]=e
			}
		};
		f(deps,'');
*/

/*

				[
						'./res/script/dir1/file1.js',
						'./res/script/dir2/file2.js',
						[
							'./res/script/framework/',
							[
								'file3.js',
								'dir4/file4.js',
								[
									'dir5/',
									[
										'lib.js',
										'plug.js'
									]
								]
							]
						],
						[
							'./res/script/required/',
							[
								'a.js',
								'b.js',
								'c.js'
							]
						],
						[
							'./res/script/',
							[
								'required/',
								[
									'subdir/',
									[
										'd.js',
										'e.js',
										'f.js'
									]
								]
							]
						],

				]

*/
