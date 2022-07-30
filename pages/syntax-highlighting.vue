<template>
	<div>
		<p class="text-gray-500">
			Select your programming language and theme, then paste your code and copy the syntax highlighted output.
		</p>

		<p class="text-gray-500">
			Powered by <a href="https://torchlight.dev/" target="_blank">Torchlight</a>.
		</p>

		<div class="mt-8 mb-16">
			<div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<Select label="Language" :options="languages" v-model="language" />
				</div>
				<div class="sm:col-span-3">
					<Select label="Theme" :options="themes" v-model="theme" />
				</div>
			</div>

			<div class="mt-8 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
				<div>
					<label
						for="code-input"
						class="block text-sm font-medium text-gray-700"
					>
						Code
					</label>

					<div class="mt-1">
						<textarea
							rows="10"
							name="code-input"
							id="code-input"
							v-model.trim="codeInput"
							class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md textarea-code"
							autofocus
							autocomplete="off"
							spellcheck="false"
							@input="maybeAutosize"
							required
						/>
					</div>
				</div>

				<div>
					<p class="block text-sm font-medium text-gray-700">Output</p>

					<div class="mt-1">
						<pre class="mt-0"><code class="torchlight has-add-lines has-remove-lines has-diff-lines" style="background-color: #24292e; --theme-selection-background: #39414a;"><!-- Syntax highlighted by torchlight.dev --><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 1</span><span style="color: #E1E4E8;">&lt;?php</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 2</span><span style="color: #6A737D;">/**</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 3</span><span style="color: #6A737D;"> * Chunk the collection into chunks of the given size.</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 4</span><span style="color: #6A737D;"> *</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 5</span><span style="color: #6A737D;"> * </span><span style="color: #F97583;">@param</span><span style="color: #6A737D;"> </span><span style="color: #F97583;">int</span><span style="color: #6A737D;"> $size</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 6</span><span style="color: #6A737D;"> * </span><span style="color: #F97583;">@return</span><span style="color: #6A737D;"> </span><span style="color: #F97583;">static</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 7</span><span style="color: #6A737D;"> */</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 8</span><span style="color: #F97583;">public</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">function</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">chunk</span><span style="color: #E1E4E8;">($size)</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> 9</span><span style="color: #E1E4E8;">{</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">10</span><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">if</span><span style="color: #E1E4E8;"> ($size </span><span style="color: #F97583;">&lt;=</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">0</span><span style="color: #E1E4E8;">) {</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">11</span><span style="color: #E1E4E8;">        </span><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">new</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">static</span><span style="color: #E1E4E8;">;</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">12</span><span style="color: #E1E4E8;">    }</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">13</span>&nbsp;</div><div class="line line-remove line-has-background" style="background-color: #d73a4930"><span style="color:#fdaeb7; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> -</span><span style="color: #fdaeb7;">    $chunks </span><span style="color: #fdaeb7;">=</span><span style="color: #fdaeb7;"> </span><span style="color: #fdaeb7;">array</span><span style="color: #fdaeb7;">(); </span></div><div class="line line-add line-has-background" style="background-color: #28a74530"><span style="color:#85e89d; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number"> +</span><span style="color: #85e89d;">    $chunks </span><span style="color: #85e89d;">=</span><span style="color: #85e89d;"> []; </span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">16</span>&nbsp;</div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">17</span><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">foreach</span><span style="color: #E1E4E8;"> (</span><span style="color: #79B8FF;">array_chunk</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">$this</span><span style="color: #F97583;">-&gt;</span><span style="color: #E1E4E8;">items, $size, </span><span style="color: #79B8FF;">true</span><span style="color: #E1E4E8;">) </span><span style="color: #F97583;">as</span><span style="color: #E1E4E8;"> $chunk) {</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">18</span><span style="color: #E1E4E8;">        $chunks[] </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">new</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">static</span><span style="color: #E1E4E8;">($chunk);</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">19</span><span style="color: #E1E4E8;">    }</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">20</span>&nbsp;</div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">21</span><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">new</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">static</span><span style="color: #E1E4E8;">($chunks);</span></div><div class="line"><span style="color:#444d56; text-align: right; -webkit-user-select: none; user-select: none;" class="line-number">22</span><span style="color: #E1E4E8;">}</span></div></code></pre>
					</div>
				</div>
			</div>
		</div>

		<div class="actions mt-8 fixed bottom-0 bg-white w-full -mx-8 p-4">
			<Button type="button" action="secondary" class="mr-4">
				Clear
			</Button>

			<Button type="button" action="primary">
				Syntax Highlight
			</Button>
		</div>
	</div>
</template>

<script setup>
import torchlight from '@torchlight-api/client/src/torchlight.js';
import Block from '@torchlight-api/client/src/block.js';
import autosize from 'autosize';

useHead({ title: 'Syntax Highlighting' });

const languages = [
	{ id: '(null) | txt | text | plaintext', name: 'Plaintext' },
	{ id: 'abap', name: 'ABAP' },
	{ id: 'actionscript-3', name: 'Actionscript 3' },
	{ id: 'ada', name: 'Ada' },
	{ id: 'alpine | alpinejs', name: 'Alpine.js' },
	{ id: 'antlers', name: 'Statamic Antlers' },
	{ id: 'apex', name: 'Apex' },
	{ id: 'applescript', name: 'Applescript' },
	{ id: 'asm', name: 'Assembly' },
	{ id: 'awk', name: 'AWK' },
	{ id: 'bat | batch', name: 'Batch' },
	{ id: 'blade', name: 'Laravel Blade' },
	{ id: 'c', name: 'C' },
	{ id: 'clojure | clj', name: 'Clojure' },
	{ id: 'cobol', name: 'Cobol' },
	{ id: 'coffee', name: 'Coffee Script' },
	{ id: 'cpp', name: 'C++' },
	{ id: 'crystal', name: 'Crystal' },
	{ id: 'csharp | c#', name: 'C#' },
	{ id: 'css', name: 'CSS' },
	{ id: 'curl', name: 'Curl' },
	{ id: 'd', name: 'D' },
	{ id: 'dart', name: 'Dart' },
	{ id: 'diff', name: 'git-diff' },
	{ id: 'dockerfile', name: 'Dockerfile' },
	{ id: 'elixir', name: 'Elixir' },
	{ id: 'elm', name: 'Elm' },
	{ id: 'erlang', name: 'Erlang' },
	{ id: 'fsharp | f#', name: 'F#' },
	{ id: 'git-commit', name: 'git-commit' },
	{ id: 'git-ignore | gitignore', name: 'git-ignore' },
	{ id: 'git-rebase', name: 'git-rebase' },
	{ id: 'gnuplot', name: 'gnuplot' },
	{ id: 'go', name: 'Go' },
	{ id: 'graphql', name: 'GraphQL' },
	{ id: 'groovy', name: 'Groovy' },
	{ id: 'hack', name: 'Hack' },
	{ id: 'haml', name: 'Haml' },
	{ id: 'handlebars | hbs', name: 'Handlebars' },
	{ id: 'haskell', name: 'Haskell' },
	{ id: 'hcl', name: 'HashiCorp Configuration Language' },
	{ id: 'hlsl', name: 'HLSL' },
	{ id: 'html', name: 'HTML' },
	{ id: 'html-ruby-erb | erb', name: 'Embedded Ruby (ERB)' },
	{ id: 'ini', name: 'INI' },
	{ id: 'java', name: 'Java' },
	{ id: 'javascript | js', name: 'JavaScript' },
	{ id: 'jinja-html', name: 'Jinja HTML' },
	{ id: 'json', name: 'JSON' },
	{ id: 'jsonc', name: 'jsonc' },
	{ id: 'jsonnet', name: 'Jsonnet' },
	{ id: 'jsx', name: 'JSX' },
	{ id: 'julia', name: 'Julia' },
	{ id: 'kotlin', name: 'Kotlin' },
	{ id: 'latex | tex', name: 'Latex' },
	{ id: 'less', name: 'Less' },
	{ id: 'lisp', name: 'Lisp' },
	{ id: 'logo', name: 'Logo' },
	{ id: 'lua', name: 'Lua' },
	{ id: 'makefile', name: 'Makefile' },
	{ id: 'markdown | md', name: 'Markdown' },
	{ id: 'matlab', name: 'MATLAB' },
	{ id: 'mdx', name: 'MDX' },
	{ id: 'nix', name: 'Nix' },
	{ id: 'objective-c | objc', name: 'Objective-C' },
	{ id: 'ocaml', name: 'OCaml' },
	{ id: 'pascal', name: 'Pascal' },
	{ id: 'perl', name: 'Perl' },
	{ id: 'perl6', name: 'Perl6' },
	{ id: 'php', name: 'PHP' },
	{ id: 'pls', name: 'PLSQL' },
	{ id: 'postcss', name: 'PostCSS' },
	{ id: 'powershell | ps | ps1', name: 'PowerShell' },
	{ id: 'prolog', name: 'Prolog' },
	{ id: 'pug | jade', name: 'Pug' },
	{ id: 'puppet', name: 'Puppet' },
	{ id: 'purescript', name: 'PureScript' },
	{ id: 'python | py', name: 'Python' },
	{ id: 'r', name: 'R' },
	{ id: 'razor', name: 'Razor' },
	{ id: 'ruby | rb', name: 'Ruby' },
	{ id: 'rust', name: 'Rust' },
	{ id: 'sas', name: 'SAS' },
	{ id: 'sass', name: 'Sass' },
	{ id: 'scala', name: 'Scala' },
	{ id: 'scheme', name: 'Scheme' },
	{ id: 'scss', name: 'SCSS' },
	{ id: 'shaderlab | shader', name: 'ShaderLab' },
	{ id: 'shell', name: 'Shell' },
	{ id: 'smalltalk', name: 'Smalltalk' },
	{ id: 'sql', name: 'SQL' },
	{ id: 'ssh-config', name: 'ssh-config' },
	{ id: 'stylus | styl', name: 'Stylus' },
	{ id: 'swift', name: 'Swift' },
	{ id: 'tcl', name: 'Tcl' },
	{ id: 'toml', name: 'TOML' },
	{ id: 'tsx', name: 'tsx' },
	{ id: 'typescript | ts', name: 'TypeScript' },
	{ id: 'vb | cmd', name: 'VB' },
	{ id: 'viml', name: 'VimL' },
	{ id: 'vue', name: 'Vue' },
	{ id: 'wasm', name: 'WebAssembly' },
	{ id: 'xml', name: 'XML' },
	{ id: 'xsl', name: 'XSL' },
	{ id: 'yaml', name: 'YAML' },
	{ id: '文言 | wenyan', name: 'Wenyan' },
];

const themes = [
	{ id: 'atom-one-dark', name: 'Atom One Dark' },
	{ id: 'cobalt2', name: 'Cobalt2' },
	{ id: 'dark-404', name: 'Dark 404' },
	{ id: 'dark-plus', name: 'Dark Plus' },
	{ id: 'deep-purple', name: 'Deep Purple' },
	{ id: 'dracula', name: 'Dracula' },
	{ id: 'fortnite', name: 'Fortnite' },
	{ id: 'github-dark', name: 'Github Dark' },
	{ id: 'github-light', name: 'Github Light' },
	{ id: 'iceberg-dark', name: 'Iceberg Dark' },
	{ id: 'light-plus', name: 'Light Plus' },
	{ id: 'liver-dark', name: 'Liver Dark' },
	{ id: 'liver-purple', name: 'Liver Purple' },
	{ id: 'material-facebook', name: 'Material Facebook' },
	{ id: 'material-theme-darker', name: 'Material Theme Darker' },
	{ id: 'material-theme-default', name: 'Material Theme Default' },
	{ id: 'material-theme-lighter', name: 'Material Theme Lighter' },
	{ id: 'material-theme-ocean', name: 'Material Theme Ocean' },
	{ id: 'material-theme-palenight', name: 'Material Theme Palenight' },
	{ id: 'min-dark', name: 'Min Dark' },
	{ id: 'min-light', name: 'Min Light' },
	{ id: 'monokai', name: 'Monokai' },
	{ id: 'monokuro-blue', name: 'Monokuro Blue' },
	{ id: 'monokuro-brown', name: 'Monokuro Brown' },
	{ id: 'monokuro-cyan', name: 'Monokuro Cyan' },
	{ id: 'monokuro-gray', name: 'Monokuro Gray' },
	{ id: 'monokuro-green', name: 'Monokuro Green' },
	{ id: 'monokuro-indigo', name: 'Monokuro Indigo' },
	{ id: 'monokuro-lime', name: 'Monokuro Lime' },
	{ id: 'monokuro-orange', name: 'Monokuro Orange' },
	{ id: 'monokuro-pink', name: 'Monokuro Pink' },
	{ id: 'monokuro-purple', name: 'Monokuro Purple' },
	{ id: 'monokuro-red', name: 'Monokuro Red' },
	{ id: 'monokuro-teal', name: 'Monokuro Teal' },
	{ id: 'monokuro-yellow', name: 'Monokuro Yellow' },
	{ id: 'moonlight', name: 'Moonlight' },
	{ id: 'moonlight-ii', name: 'Moonlight II' },
	{ id: 'night-owl', name: 'Night Owl' },
	{ id: 'nord', name: 'Nord' },
	{ id: 'olaolu-palenight', name: 'Olaolu Olawuyi\'s Palenight' },
	{ id: 'one-dark-pro', name: 'One Dark Pro' },
	{ id: 'serendipity-dark', name: 'Serendipity Dark' },
	{ id: 'serendipity-light', name: 'Serendipity Light' },
	{ id: 'shades-of-purple', name: 'Shades of Purple' },
	{ id: 'slack-theme-dark-mode', name: 'Slack Theme Dark Mode' },
	{ id: 'slack-theme-ochin', name: 'Slack Theme Ochin' },
	{ id: 'solarized-dark', name: 'Solarized Dark' },
	{ id: 'solarized-light', name: 'Solarized Light' },
	{ id: 'synthwave-84', name: 'Synthwave 84' },
	{ id: 'winter-is-coming-blue', name: 'Winter Is Coming Blue' },
	{ id: 'winter-is-coming-dark', name: 'Winter Is Coming Dark' },
	{ id: 'winter-is-coming-light', name: 'Winter Is Coming Light' },
	{ id: 'yellow-delight', name: 'Yellow Delight' },
];

const language = ref(languages[69]);
const theme = ref(themes[7]);
const codeInput = ref('');

async function runApi() {
	torchlight.init({ token: 'torch_CQY5yDkdrVDsoPujxN3Wn8Znd8r1XMVoEhCTT8z8' });
	torchlight.logger.silence();

	const config = {
		code: document.querySelector('#code-input').value,
		language: language.value,
		theme: theme.value,
	};

	const block = new Block(config);
	const highlightedBlock = await torchlight.highlight([block]);
}

function maybeAutosize() {
	autosize(document.querySelector('textarea'));
}
</script>
