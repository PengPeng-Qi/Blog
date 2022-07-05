import{_ as n,o as s,c as a,e}from"./app.115d8735.js";var t="/Blog/assets/react-redux\u6A21\u578B\u56FE.b0c93c29.png";const p={},o=e('<h1 id="react-redux" tabindex="-1"><a class="header-anchor" href="#react-redux" aria-hidden="true">#</a> React-Redux</h1><h2 id="react-redux-\u539F\u7406\u56FE" tabindex="-1"><a class="header-anchor" href="#react-redux-\u539F\u7406\u56FE" aria-hidden="true">#</a> React-Redux \u539F\u7406\u56FE</h2><p><img src="'+t+`" alt="react-redux\u6A21\u578B\u56FE"></p><h2 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a> \u57FA\u672C\u4F7F\u7528</h2><ul><li>\u5B89\u88C5<code>react-redux</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> react-redux
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> react-redux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BB9\u5668\u7EC4\u4EF6\u4E00\u822C\u653E\u5728 <code>containers</code> \u6587\u4EF6\u5939\u4E0B</li></ul><details class="custom-container details"><summary>\u4E00\u822C\u5199\u6CD5</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* src/containers/Xxx/index.jsx */</span>
<span class="token comment">/* 
  \u8D1F\u8D23\u4E0EUI\u7EC4\u4EF6\u4EE5\u53CAredux\u901A\u4FE1
*/</span>
<span class="token comment">/* \u5F15\u5165Xxx\u7EC4\u4EF6\u7684UI\u7EC4\u4EF6  */</span>
<span class="token keyword">import</span> XxxUI <span class="token keyword">from</span> <span class="token string">&#39;../../components/Xxx/index.jsx&#39;</span>

<span class="token comment">/* \u5F15\u5165store */</span>
<span class="token comment">// import store from &#39;../../redux/store.js&#39;  // \u4E0D\u80FD\u8FD9\u6837\u5F15\u5165store</span>
<span class="token comment">// \u9700\u8981\u5728app\u7EC4\u4EF6\u901A\u8FC7 &lt;Xxx store={store} /&gt; \u7684\u65B9\u5F0F\u4F20\u9012</span>

<span class="token comment">/* \u5F15\u5165connect\u7528\u4E8E\u8FDE\u63A5UI\u7EC4\u4EF6\u4E0Eredux */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token comment">/* 
  mapStateToProp\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u7684key\u5C31\u4F5C\u4E3A\u4F20\u9012\u7ED9XxxUI\u7EC4y\u4EF6props\u7684key
  value\u5C31\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6props\u7684value -- \u72B6\u6001
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> state <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
  mapDispatchToProps\u51FD\u6570\u8FD4\u56DE\u7684\u5BF9\u8C61\u4E2D\u7684key\u5C31\u4F5C\u4E3A\u4F20\u9012\u7ED9XxxUI\u7EC4\u4EF6props\u7684key
  value\u5C31\u4F5C\u4E3A\u4F20\u9012\u7ED9UI\u7EC4\u4EF6props\u7684value -- \u64CD\u4F5C\u72B6\u6001\u7684\u65B9\u6CD5
*/</span>
<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token function-variable function">jia</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u901A\u77E5redux\u6267\u884C\u52A0\u6CD5 */</span>
    <span class="token keyword">return</span> <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;increment&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u521B\u5EFA\u5E76\u66B4\u9732\u4E00\u4E2AXxx\u7684\u5BB9\u5668\u7EC4\u4EF6 */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connent</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">,</span> mapDispatchToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>XxxUI<span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>\u4F18\u5316\u7248\u672C\u4E00\uFF1A\u7B80\u5316\u5BB9\u5668\u7EC4\u4EF6</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* src/containers/Xxx/index.jsx */</span>
<span class="token keyword">import</span> XxxUI <span class="token keyword">from</span> <span class="token string">&#39;../../components/Xxx/index.jsx&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> connent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createXxxAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./xxx_action&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connent</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> state <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  <span class="token comment">/* mapDispatchToProps\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61 */</span>
  <span class="token comment">/* mapDispatchToProps\u7684\u4E00\u822C\u5199\u6CD5 */</span>
  <span class="token comment">/* 
    (dispatch) =&gt; ({
      jia: number =&gt; dispatch(createXxxAction(number))
    })
  */</span>

  <span class="token comment">/* mapDispatchToProps\u7684\u7B80\u5199 */</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">Xxxx</span><span class="token operator">:</span> createXxxAction
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">(</span>XxxUI<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><blockquote><p>\u4F7F\u7528<code>react-redux</code> \u5F53\u521D\u4FEE\u6539\u72B6\u6001\u4E0D\u5237\u65B0\u7684\u95EE\u9898\u5C31\u4E0D\u5B58\u5728\u4E86\uFF0C\u53EF\u4EE5\u4E0D\u7528\u518D\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u4F20\u9012store\u4E5F\u4E0D\u9700\u8981\u518D\u4F7F\u7528<code>&lt;Xxx store={store} /&gt;</code> \u6765\u4F20\u9012\u4E86</p></blockquote><details class="custom-container details"><summary>\u4F18\u5316\u7248\u672C\u4E8C\uFF1A\u7B80\u5316<code>store</code> \u4F20\u9012\u95EE\u9898\u4EE5\u53CA\u5237\u65B0</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* index.js */</span>
<span class="token comment">/* \u53EF\u4EE5\u5728index.js\u9664\u53BB\u6389 */</span>
store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 

<span class="token comment">/* \u589E\u52A0\u4EE5\u4E0B\u4EE3\u7801\u7528\u4E8E\u7ED9\u5BB9\u5668\u7EC4\u4EF6\u4F20\u9012store */</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./redux/store.js&#39;</span>
<span class="token comment">/* Provide\u7528\u4E8E\u5206\u6790\u5BB9\u5668\u7EC4\u4EF6\uFF0C\u7136\u540E\u5C06store\u4F20\u9012\u7ED9\u5BB9\u5668\u7EC4\u4EF6 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Provider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Provider store<span class="token operator">=</span><span class="token punctuation">{</span>store<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Provider<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="custom-container details"><summary>\u4F18\u5316\u7248\u672C\u4E09\uFF1A\u6574\u5408UI\u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6</summary><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* \u5C06UI\u7EC4\u4EF6\u548C\u5BB9\u5668\u7EC4\u4EF6\u6574\u5408\u5728\u4E00\u4E2A\u6587\u4EF6 src/containers/Xxx/index.jsx */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-redux&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createXxxAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./xxx_action&#39;</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>

<span class="token keyword">class</span> <span class="token class-name">XxxUI</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">Increament</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>number\u7684\u503C\u4E3A\uFF1A<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>number<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>add<span class="token punctuation">}</span><span class="token operator">&gt;</span>\u70B9\u6211\u52A0\u4E00<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> state <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  <span class="token punctuation">{</span> <span class="token literal-property property">Increament</span><span class="token operator">:</span> createXxxAction <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">(</span>XxxUI<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li>UI\u7EC4\u4EF6\u4E00\u822C\u653E\u5728 <code>components</code> \u6587\u4EF6\u5939\u4E0B\uFF0C\u4E0D\u505A\u4EFB\u4F55redux \u7684\u64CD\u4F5C\uFF0C\u63A5\u53D7\u65B9\u6CD5\u4EE5\u53CA\u72B6\u6001\u901A\u8FC7<code>this.props.xxx</code> \u63A5\u6536</li></ul><hr><h2 id="\u591A\u4E2Areact-redux\u7BA1\u7406\u7684\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2Areact-redux\u7BA1\u7406\u7684\u7EC4\u4EF6" aria-hidden="true">#</a> \u591A\u4E2A<code>react-redux</code>\u7BA1\u7406\u7684\u7EC4\u4EF6</h2><p>\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500 src
|  |- containers 
|  |- redux 
|  \u2502  |- actions
|  \u2502  \u2502  |\u2500 Xxx.js
|  |  |  \u2514\u2500 Xxxx.js
|  |  |
|  \u2502  |- reducers
|  \u2502  |  |\u2500 Xxx.js
|  |  |  \u2514\u2500 Xxxx.js
|  |  |- constant.js
|  |  \u2514\u2500 store.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5408\u5E76\u591A\u4E2Areducer\uFF0C<code>store.js</code>\u6587\u4EF6\u9700\u8981\u505A\u4E00\u4E9B\u4FEE\u6539\uFF1A</p><details class="custom-container details"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* src/redux/store.js */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createStore<span class="token punctuation">,</span> applyMiddleware<span class="token punctuation">,</span>combineReducers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;redux&#39;</span>

<span class="token keyword">import</span> Xxxx_reducer <span class="token keyword">from</span> <span class="token string">&#39;./Xxxx_reducer&#39;</span>
<span class="token keyword">import</span> Xxx_reducer <span class="token keyword">from</span> <span class="token string">&#39;./Xxx_reducer&#39;</span>

<span class="token keyword">import</span> thunk <span class="token keyword">from</span> <span class="token string">&#39;redux-thunk&#39;</span>

<span class="token keyword">const</span> allReducers <span class="token operator">=</span> <span class="token function">combineReducers</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">Xxxx</span><span class="token operator">:</span> Xxxx_reducer<span class="token punctuation">,</span>
  <span class="token literal-property property">Xxx</span><span class="token operator">:</span> Xxx_reducer
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">createStore</span><span class="token punctuation">(</span>allReducers<span class="token punctuation">,</span> <span class="token function">applyMiddleware</span><span class="token punctuation">(</span>thunk<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><blockquote><p>1\u3001\u53EF\u4EE5\u5C06\u6240\u6709\u7684reducer \u6C47\u603B\u5230\u4E00\u4E2A\u6587\u4EF6\u4E0B\uFF1A<code>reducers/index.js</code><br> 2\u3001\u4FEE\u6539\u4E86reducers\uFF0C\u5728\u5BB9\u5668\u7EC4\u4EF6<code>mapStateToProps</code> \u8BFB\u53D6\u7684\u65F6\u5019\u4E5F\u9700\u8981\u8BFB\u53D6\u5230 <code>state.key</code></p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token comment">// return { number: state.Xxxx }</span>
  <span class="token comment">// or</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">number</span><span class="token operator">:</span> state<span class="token punctuation">.</span>Xxx <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react\u601D\u60F3\u4E2D\u7684\u7EAF\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#react\u601D\u60F3\u4E2D\u7684\u7EAF\u51FD\u6570" aria-hidden="true">#</a> React\u601D\u60F3\u4E2D\u7684\u7EAF\u51FD\u6570</h2><p>\u7EAF\u51FD\u6570\uFF1A</p><ul><li>\u76F8\u540C\u7684\u8F93\u5165\u4F1A\u6709\u76F8\u540C\u7684\u8F93\u51FA</li><li>\u4E0D\u4FEE\u6539\u539F\u6570\u636E</li></ul><p>React\u4F1A\u5BF9\u6570\u7EC4\u505A\u6D45\u6BD4\u8F83\uFF0C\u5982\u679C\u6570\u7EC4\u4F7F\u7528<code>push\u3001unshift...</code> \u6539\u53D8\u4E86\u5143\u6570\u7EC4\u9875\u9762\u4E0D\u4F1A\u5237\u65B0\uFF0C\u5982\u679C\u4F7F\u7528<code>[...state, data]</code> \u91CD\u65B0\u7F16\u5199\u65B0\u6570\u7EC4\uFF0C\u5219\u4F1A\u5BF9\u9875\u9762\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3</p><blockquote><p>redux \u548C reducer \u5FC5\u987B\u662F\u7EAF\u51FD\u6570</p></blockquote>`,26),c=[o];function i(l,r){return s(),a("div",null,c)}var d=n(p,[["render",i],["__file","react-redux.html.vue"]]);export{d as default};
