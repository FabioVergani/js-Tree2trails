const paths = {
	'folder1/':[
		'file1-1.js',
		'file1-2.js',
		'file1-3.js'
	],
	'folder2/':[
		'file2-1.js',
		'file2-2.js',
		'file2-3.js',
		{
			'subfolder21/':[
				'file21-1.js',
				'file21-2.js',
				'file21-3.js'
			]
		}
	],
	'folder3/':[
		'file3-1.js',
		'file3-2.js',
		'file3-3.js',
		{
			'subfolder31/':[
				'file31-1.js',
				'file31-2.js',
				'file31-3.js'
			]
		},
		{
			'subfolder32/':[
				'file32-1.js',
				'file32-2.js',
				'file32-3.js',
				{
					'subfolder33/':[
						'file33-1.js',
						'file33-2.js',
						'file33-3.js'
					]
				}
			]
		}
	],
	'folder4/':['file4-1.js']
};
console.dir(paths);
const result=treeObj2trails(paths);
console.dir(result);
//console.log(result.join('\n'));
document.body.firstElementChild.appendChild(document.createTextNode(result.join('\n')));
/*
folder1/file1-1.js
folder1/file1-2.js
folder1/file1-3.js

folder2/file2-1.js
folder2/file2-2.js
folder2/file2-3.js

folder2/subfolder21/file21-1.js
folder2/subfolder21/file21-2.js
folder2/subfolder21/file21-3.js

folder3/file3-1.js
folder3/file3-2.js
folder3/file3-3.js

folder3/subfolder31/file31-1.js
folder3/subfolder31/file31-2.js
folder3/subfolder31/file31-3.js

folder3/subfolder32/file32-1.js
folder3/subfolder32/file32-2.js
folder3/subfolder32/file32-3.js

folder3/subfolder32/subfolder33/file33-1.js
folder3/subfolder32/subfolder33/file33-2.js
folder3/subfolder32/subfolder33/file33-3.js

folder4/file4-1.js
*/