let pkg = require('./package.json');

export default [{
	input: 'src/index.js',
	output: {
		file: pkg.main,
		format: 'cjs',
		indent: '\t'
	}
},
{
	input: 'src/index.js',
	output: {
		file: pkg.module,
		format: 'esm',
		indent: '\t'
	}
}];