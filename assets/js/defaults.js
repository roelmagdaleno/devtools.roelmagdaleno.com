export const defaultSyntaxHighlighted = '<pre><code data-theme="github-dark" data-lang="php" class="torchlight has-add-lines has-remove-lines has-diff-lines" style="background-color: #24292e; --theme-selection-background: #39414a;"><!-- Syntax highlighted by torchlight.dev --><div class="line"><span style="color: #E1E4E8;">&lt;?php</span></div><div class="line"><span style="color: #6A737D;">/**</span></div><div class="line"><span style="color: #6A737D;"> * Chunk the collection into chunks of the given size.</span></div><div class="line"><span style="color: #6A737D;"> *</span></div><div class="line"><span style="color: #6A737D;"> * </span><span style="color: #F97583;">@param</span><span style="color: #6A737D;"> </span><span style="color: #F97583;">int</span><span style="color: #6A737D;"> $size</span></div><div class="line"><span style="color: #6A737D;"> * </span><span style="color: #F97583;">@return</span><span style="color: #6A737D;"> </span><span style="color: #F97583;">static</span></div><div class="line"><span style="color: #6A737D;"> */</span></div><div class="line"><span style="color: #F97583;">public</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">function</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">chunk</span><span style="color: #E1E4E8;">($size)</span></div><div class="line"><span style="color: #E1E4E8;">{</span></div><div class="line"><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">if</span><span style="color: #E1E4E8;"> ($size </span><span style="color: #F97583;">&lt;=</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">0</span><span style="color: #E1E4E8;">) {</span></div><div class="line"><span style="color: #E1E4E8;">        </span><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">new</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">static</span><span style="color: #E1E4E8;">;</span></div><div class="line"><span style="color: #E1E4E8;">    }</span></div><div class="line">&nbsp;</div><div class="line line-remove line-has-background" style="background-color: #d73a4930"><span style="color: #fdaeb7;">    $chunks </span><span style="color: #fdaeb7;">=</span><span style="color: #fdaeb7;"> </span><span style="color: #fdaeb7;">array</span><span style="color: #fdaeb7;">(); </span></div><div class="line line-add line-has-background" style="background-color: #28a74530"><span style="color: #85e89d;">    $chunks </span><span style="color: #85e89d;">=</span><span style="color: #85e89d;"> []; </span></div><div class="line">&nbsp;</div><div class="line"><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">foreach</span><span style="color: #E1E4E8;"> (</span><span style="color: #79B8FF;">array_chunk</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">$this</span><span style="color: #F97583;">-&gt;</span><span style="color: #E1E4E8;">items, $size, </span><span style="color: #79B8FF;">true</span><span style="color: #E1E4E8;">) </span><span style="color: #F97583;">as</span><span style="color: #E1E4E8;"> $chunk) {</span></div><div class="line"><span style="color: #E1E4E8;">        $chunks[] </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">new</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">static</span><span style="color: #E1E4E8;">($chunk);</span></div><div class="line"><span style="color: #E1E4E8;">    }</span></div><div class="line">&nbsp;</div><div class="line"><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">new</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">static</span><span style="color: #E1E4E8;">($chunks);</span></div><div class="line"><span style="color: #E1E4E8;">}</span></div></code></pre>';

export const defaultCodeInput = '<?php\n' +
	'/**\n' +
	' * Chunk the collection into chunks of the given size.\n' +
	' *\n' +
	' * @param int $size\n' +
	' * @return static\n' +
	' */\n' +
	'public function chunk($size)\n' +
	'{\n' +
	'    if ($size <= 0) {\n' +
	'        return new static;\n' +
	'    }\n' +
	'\n' +
	'    $chunks = array(); // [tl! --]\n' +
	'    $chunks = []; // [tl! ++]\n' +
	'\n' +
	'    foreach (array_chunk($this->items, $size, true) as $chunk) {\n' +
	'        $chunks[] = new static($chunk);\n' +
	'    }\n' +
	'\n' +
	'    return new static($chunks);\n' +
	'}';
