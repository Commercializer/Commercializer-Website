<template>
  <UIKitLayout>
    <UIKitPageTitle title="Code" description="Displaying inline and multiline blocks of code." />

    <!-- Inline code -->
    <CustomSyntax id="code-inline" title="Inline code" :code="inlineCode">
      <p class="mb-0">
        Wrap inline snippets of code with <code>&lt;code&gt;</code>. Be sure to escape HTML angle
        brackets.
      </p>
    </CustomSyntax>

    <!-- User input -->
    <CustomSyntax id="code-user-input" title="User input" :code="userInputCode">
      <p class="mb-0">
        To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br />
        To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
      </p>
    </CustomSyntax>

    <!-- Variables -->
    <CustomSyntax id="code-variables" title="Variables" :code="variableCode">
      <var>y </var>= <var>mx </var>+
      <var>b</var>
    </CustomSyntax>

    <!-- Code block -->
    <CustomSyntax id="code-block" title="Code block" :code="codeBlock">
      <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;<br>&lt;p&gt;And another line of sample text here...&lt;/p&gt;</code></pre>
    </CustomSyntax>

    <!-- Code block scrollable -->
    <CustomSyntax id="code-scrollable" title="Code block scrollable" :code="codeBlockScrollable">
      <pre
        class="overflow-auto"
        style="height: 19.75rem"
      ><code>&lt;div class=&quot;table-responsive&quot;&gt;
  &lt;table class=&quot;table&quot;&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;#&lt;/th&gt;
        &lt;th&gt;First Name&lt;/th&gt;
        &lt;th&gt;Last Name&lt;/th&gt;
        &lt;th&gt;Position&lt;/th&gt;
        &lt;th&gt;Phone&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
        &lt;td&gt;John&lt;/td&gt;
        &lt;td&gt;Doe&lt;/td&gt;
        &lt;td&gt;CEO, Founder&lt;/td&gt;
        &lt;td&gt;+3 555 68 70&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
        &lt;td&gt;Anna&lt;/td&gt;
        &lt;td&gt;Cabana&lt;/td&gt;
        &lt;td&gt;Designer&lt;/td&gt;
        &lt;td&gt;+3 434 65 93&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
        &lt;td&gt;Kale&lt;/td&gt;
        &lt;td&gt;Thornton&lt;/td&gt;
        &lt;td&gt;Developer&lt;/td&gt;
        &lt;td&gt;+3 285 42 88&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th scope=&quot;row&quot;&gt;4&lt;/th&gt;
        &lt;td&gt;Jane&lt;/td&gt;
        &lt;td&gt;Birkins&lt;/td&gt;
        &lt;td&gt;Support&lt;/td&gt;
        &lt;td&gt;+3 774 28 50&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
    </CustomSyntax>

    <!-- Code highlighting -->
    <CustomSyntax id="code-highlighting" title="Code highlighting" :code="codeHighlighting">
      <pre
        class="line-numbers"
      ><code class="lang-html">&lt;div class=&quot;table-responsive&quot;&gt;
  &lt;table class=&quot;table&quot;&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;#&lt;/th&gt;
        &lt;th&gt;First Name&lt;/th&gt;
        &lt;th&gt;Last Name&lt;/th&gt;
        &lt;th&gt;Position&lt;/th&gt;
        &lt;th&gt;Phone&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;th scope=&quot;row&quot;&gt;1&lt;/th&gt;
        &lt;td&gt;John&lt;/td&gt;
        &lt;td&gt;Doe&lt;/td&gt;
        &lt;td&gt;CEO, Founder&lt;/td&gt;
        &lt;td&gt;+3 555 68 70&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th scope=&quot;row&quot;&gt;2&lt;/th&gt;
        &lt;td&gt;Anna&lt;/td&gt;
        &lt;td&gt;Cabana&lt;/td&gt;
        &lt;td&gt;Designer&lt;/td&gt;
        &lt;td&gt;+3 434 65 93&lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;th scope=&quot;row&quot;&gt;3&lt;/th&gt;
        &lt;td&gt;Kale&lt;/td&gt;
        &lt;td&gt;Thornton&lt;/td&gt;
        &lt;td&gt;Developer&lt;/td&gt;
        &lt;td&gt;+3 285 42 88&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
    </CustomSyntax>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorNavigationData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import CustomSyntax from '@/components/CustomSyntax.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const inlineCode = `<p>Wrap inline snippets of code with <code>&lt;code&gt;</code>.</p>`

const userInputCode = `<p>
  To switch directories, type <kbd>cd</kbd> followed by the name of the directory.
  To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
</p>`

const variableCode = `<var>y</var> = <var>mx</var> + <var>b</var>`

const codeBlock = `<pre>
  <code>&lt;p&gt;Sample text here...&lt;/p&gt;
  &lt;p&gt;And another line of sample text here...&lt;/p&gt;</code>
</pre>`

const codeBlockScrollable = `<pre class="overflow-auto" style="height: 20rem;">
  <code>
    Code goes here...
  </code>
</pre>`

const codeHighlighting = `<pre class="line-numbers">
  <code class="lang-html">
    HTML code goes here...
  </code>
</pre>`

const anchorNavigationData = [
  {
    id: 'code-inline',
    title: 'Inline code'
  },
  {
    id: 'code-user-input',
    title: 'User input'
  },
  {
    id: 'code-variables',
    title: 'Variables'
  },
  {
    id: 'code-block',
    title: 'Code block'
  },
  {
    id: 'code-scrollable',
    title: 'Code block scrollable'
  },
  {
    id: 'code-highlighting',
    title: 'Code highlighting'
  }
]
</script>
