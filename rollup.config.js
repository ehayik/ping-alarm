/**
 * Created by eljaiek on 7/18/17.
 */
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';
import json from 'rollup-plugin-json';

export default {
    entry: 'src/main.js',
    format: 'cjs',
    dest: 'dist/app/bundle.js',
    external: ['events', 'net', 'os', 'fs', 'child_process', 'inquirer', 'play-sound'],
    plugins: [
        json(),
        commonjs(),
        resolve({
            jsnext: true,
            main: true
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        copy({
            'node_modules/figlet/fonts': 'dist/fonts',
            'src/media': 'dist/app/media',
            verbose: true
        }),
    ]
}