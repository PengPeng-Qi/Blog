import{_ as n,o as s,c as a,e}from"./app.115d8735.js";const t={},i=e(`<h1 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> Let</h1><h2 id="\u6682\u65F6\u6027\u6B7B\u533A" tabindex="-1"><a class="header-anchor" href="#\u6682\u65F6\u6027\u6B7B\u533A" aria-hidden="true">#</a> \u6682\u65F6\u6027\u6B7B\u533A</h2><p>\u58F0\u660E\u4EE3\u7801\u4E4B\u524D\u7684\u533A\u57DF\u90FD\u5C5E\u4E8E<strong>\u6682\u65F6\u6027\u6B7B\u533A</strong>\u3002\u6682\u65F6\u6027\u6B7B\u533A\u4E0D\u80FD\u8BFB\u6216\u5199\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>a<span class="token operator">++</span><span class="token punctuation">;</span>  <span class="token comment">// \u62A5\u9519</span>

<span class="token keyword">let</span> a<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><p>\u53EF\u4EE5\u5728\u4E00\u4E2A\u62E5\u6709\u5757\u7EA7\u4F5C\u7528\u57DF\u53D8\u91CF\u88AB\u58F0\u660E\u524D\u83B7\u53D6\u5B83\u3002\u53EA\u4E0D\u8FC7\u4E0D\u80FD\u5728\u53D8\u91CF\u58F0\u660E\u524D\u53BB\u8C03\u7528\u90A3\u4E2A\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// okay to capture &#39;a&#39;</span>
  <span class="token keyword">return</span> a<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u4E0D\u80FD\u5728&#39;a&#39; \u88AB\u58F0\u660E\u524D\u8C03\u7528foo</span>
<span class="token comment">// \u8FD0\u884C\u65F6\u62A5\u9519</span>
<span class="token comment">// foo();</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u8C03\u7528</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145" aria-hidden="true">#</a> \u8865\u5145</h2><p>\u8FD9\u91CC\u8865\u5145\u51E0\u4E2A\u5173\u4E8E\u58F0\u660E\u7684\u77E5\u8BC6\u70B9\uFF1A</p><p><strong>\u77E5\u8BC6\u70B9\u4E00</strong>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> x<span class="token punctuation">;</span>
<span class="token keyword">var</span> x<span class="token punctuation">;</span> <span class="token comment">// \u6B63\u5E38</span>

<span class="token keyword">var</span> y<span class="token punctuation">;</span>
<span class="token keyword">let</span> y<span class="token punctuation">;</span> <span class="token comment">// \u62A5\u9519</span>

<span class="token keyword">let</span> z<span class="token punctuation">;</span>
<span class="token keyword">let</span> z<span class="token punctuation">;</span> <span class="token comment">// \u62A5\u9519</span>

<span class="token keyword">let</span> m<span class="token punctuation">;</span>
<span class="token keyword">var</span> m<span class="token punctuation">;</span> <span class="token comment">// \u62A5\u9519</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u77E5\u8BC6\u70B9\u4E8C</strong>\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* 
  catch \u4E5F\u62E5\u6709\u540C\u6837\u7684\u4F5C\u7528\u57DF\u89C4\u5219
*/</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string">&quot;oh no!&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Oh well.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Error: &#39;e&#39; doesn&#39;t exist here</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),c=[i];function p(l,o){return s(),a("div",null,c)}var u=n(t,[["render",p],["__file","Let\u6682\u65F6\u6027\u6B7B\u533A\u7684\u7406\u89E3.html.vue"]]);export{u as default};
