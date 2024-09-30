<template>
  <UIKitLayout>
    <UIKitPageTitle
      title="Typography"
      description="Headings, body text, lists, blockquotes and more."
    />

    <!-- Headings -->
    <CustomSyntax id="type-headings" title="Headings" :code="headings">
      <h1>h1. Silicon heading</h1>
      <hr class="my-0" />
      <h2 class="pt-3">h2. Silicon heading</h2>
      <hr class="my-0" />
      <h3 class="pt-3">h3. Silicon heading</h3>
      <hr class="my-0" />
      <h4 class="pt-3">h4. Silicon heading</h4>
      <hr class="my-0" />
      <h5 class="pt-3">h5. Silicon heading</h5>
      <hr class="my-0" />
      <h6 class="pt-3 mb-0">h6. Silicon heading</h6>
    </CustomSyntax>

    <!-- Display headings -->
    <CustomSyntax id="type-displays" title="Display headings" :code="displayHeadings">
      <h1 class="display-1">Display 1</h1>
      <hr class="my-0" />
      <h1 class="display-2 pt-3">Display 2</h1>
      <hr class="my-0" />
      <h1 class="display-3 pt-3">Display 3</h1>
      <hr class="my-0" />
      <h1 class="display-4 pt-3">Display 4</h1>
      <hr class="my-0" />
      <h1 class="display-5 pt-3">Display 5</h1>
      <hr class="my-0" />
      <h1 class="display-6 pt-3 mb-0">Display 6</h1>
    </CustomSyntax>

    <!-- Body text sizes -->
    <CustomSyntax id="type-body-text" title="Body text sizes" :code="bodyTextSize">
      <p class="fs-1">
        <span class="fw-bold">fs-1.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor
      </p>
      <p class="fs-2">
        <span class="fw-bold">fs-2.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor
      </p>
      <p class="fs-3">
        <span class="fw-bold">fs-3.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor
      </p>
      <p class="fs-4">
        <span class="fw-bold">fs-4.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor
      </p>
      <p class="fs-5">
        <span class="fw-bold">fs-5.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor
      </p>
      <p class="fs-6">
        <span class="fw-bold">fs-6.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor
      </p>
      <p class="lead">
        <span class="fw-bold">Lead.&nbsp;</span>Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor
      </p>
      <p class="fs-lg">
        <strong>Large.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
        auctor
      </p>
      <p>
        <strong>Normal.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
        auctor
      </p>
      <p class="fs-sm">
        <strong>Small.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
        auctor
      </p>
      <p class="fs-xs mb-md-0">
        <strong>Extra small.&nbsp;</strong>Vivamus sagittis lacus vel augue laoreet rutrum faucibus
        dolor auctor
      </p>
    </CustomSyntax>

    <!-- Inline text elements -->
    <CustomSyntax id="type-inline" title="Inline text elements" :code="inlineTextElements">
      <p>
        You can use the mark tag to
        <mark>highlight</mark>
        text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>This line of text is meant to be treated as an addition to the document.</ins>
      </p>
      <p>
        <u>This line of text will render as underlined.</u>
      </p>
      <p><small>This line of text is meant to be treated as fine print.</small></p>
      <p><strong>This line rendered as bold text.</strong></p>
      <p><em>This line rendered as italicized text.</em></p>
      <p class="mb-0"><a href="#">Inline link</a></p>
    </CustomSyntax>

    <!-- Abbreviations -->
    <CustomSyntax id="type-abbreviations" title="Abbreviations" :code="abbreviations">
      <p><abbr title="attribute">attr</abbr></p>
      <p class="mb-0"><abbr class="initialism" title="HyperText Markup Language">HTML</abbr></p>
    </CustomSyntax>

    <!-- Blockquote -->
    <CustomSyntax id="type-blockquote" title="Blockquote" :code="blockquote">
      <figure class="mb-0">
        <blockquote class="blockquote">
          <p>A well-known quote, contained in a blockquote element.</p>
        </blockquote>
        <figcaption class="blockquote-footer mb-0">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>
      </figure>
    </CustomSyntax>

    <!-- Lists: Unordered and ordered -->
    <CustomSyntax id="type-lists" title="Lists: Unordered and ordered" :code="bothList">
      <div class="row">
        <div class="col-sm-6">
          <ul class="mb-sm-0">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <ol class="mb-0">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
          </ol>
        </div>
      </div>
    </CustomSyntax>

    <!-- Lists: Unstyled -->
    <CustomSyntax id="type-lists-unstyled" title="Lists: Unstyled" :code="unStyleList">
      <ul class="list-unstyled mb-0">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>
          Integer molestie lorem at massa
          <ul>
            <li>Phasellus iaculis neque</li>
            <li>Purus sodales ultricies</li>
            <li>Vestibulum laoreet porttitor sem</li>
          </ul>
        </li>
        <li>Faucibus porta lacus fringilla vel</li>
        <li>Aenean sit amet erat nunc</li>
      </ul>
    </CustomSyntax>

    <!-- Lists: Inline -->
    <CustomSyntax id="type-lists-inline" title="Lists: Inline" :code="inlineList">
      <ul class="list-inline mb-0">
        <li class="list-inline-item">Lorem ipsum dolor</li>
        <li class="list-inline-item">Consectetur adipiscing</li>
        <li class="list-inline-item">Integer molestie</li>
      </ul>
    </CustomSyntax>

    <!-- Description list basic example -->
    <CustomSyntax
      id="type-description-list"
      title="Description list basic example"
      :code="descriptionListBasic"
    >
      <dl class="mb-0">
        <dt>Description lists</dt>
        <dd>A description list is perfect for defining terms.</dd>
        <dt>Malesuada porta</dt>
        <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
        <dt>Euismod</dt>
        <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
      </dl>
    </CustomSyntax>

    <!-- Description list alignment -->
    <CustomSyntax
      id="type-description-list-align"
      title="Description list alignment"
      :code="descriptionList"
    >
      <dl class="row mb-0">
        <dt class="col-sm-3">Description lists</dt>
        <dd class="col-sm-9">A description list is perfect for defining terms.</dd>
        <dt class="col-sm-3">Euismod</dt>
        <dd class="col-sm-9">
          <p class="mb-2">
            Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
          </p>
          <p class="mb-0">Donec id elit non mi porta gravida at eget metus.</p>
        </dd>
        <dt class="col-sm-3">Malesuada porta</dt>
        <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
        <dt class="col-sm-3 text-truncate">Long truncated term is truncated</dt>
        <dd class="col-sm-9">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus.
        </dd>
        <dt class="col-sm-3">Nesting</dt>
        <dd class="col-sm-9">
          <dl class="row mb-0">
            <dt class="col-sm-4">Nested definition list</dt>
            <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat nunc augue.</dd>
          </dl>
        </dd>
      </dl>
    </CustomSyntax>

    <template v-slot:anchor-navigation>
      <AnchorNavigation :elements="anchorNavigationData" />
    </template>
  </UIKitLayout>
</template>

<script setup lang="ts">
import UIKitLayout from '@/layouts/UIKitLayout.vue'
import CustomSyntax from '@/components/CustomSyntax.vue'
import UIKitPageTitle from '@/layouts/partials/UIKitPageTitle.vue'
import AnchorNavigation from '@/components/AnchorNavigation.vue'

const headings = `<!-- Headings -->
<h1>h1. Coderthemes heading</h1>
<h2>h2. Coderthemes heading</h2>
<h3>h3. Coderthemes heading</h3>
<h4>h4. Coderthemes heading</h4>
<h5>h5. Coderthemes heading</h5>
<h6>h6. Coderthemes heading</h6>`

const displayHeadings = `<!-- Display headings -->
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>`

const bodyTextSize = `<!-- Body text sizes -->
<p class="fs-1">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="fs-2">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="fs-3">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="fs-4">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="fs-5">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="fs-6">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="fs-lg">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="fs-sm">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>
<p class="fs-xs">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor</p>`

const inlineTextElements = `<!-- Inline text elements -->
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p><a href="#">Inline link</a></p>`

const abbreviations = `<!-- Abbreviations -->
<p><abbr title="attribute">attr</abbr></p>
<p><abbr class="initialism" title="HyperText Markup Language">HTML</abbr></p>`

const blockquote = `<!-- Blockquote -->
<figure>
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>`

const bothList = `<!-- Unordered list -->
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit</li>
</ol>`

const unStyleList = `<!-- Unstyled list -->
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
</ul>`

const inlineList = `<!-- Inline list -->
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum dolor</li>
  <li class="list-inline-item">Consectetur adipiscing</li>
  <li class="list-inline-item">Integer molestie</li>
</ul>`

const descriptionListBasic = `<!-- Description list basic example -->
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
</dl>`

const descriptionList = `<!-- Description list alignment -->
<dl class="row">
  <dt class="col-sm-3">Description lists&nbsp;</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>
  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p class="mb-2">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p class="mb-0">Donec id elit non mi porta gravida at eget metus.</p>
  </dd>
  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
  <dt class="col-sm-3 text-truncate">Long truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat nunc augue.</dd>
    </dl>
  </dd>
</dl>`

const anchorNavigationData = [
  {
    id: 'type-headings',
    title: 'Headings'
  },
  {
    id: 'type-displays',
    title: 'Display headings'
  },
  {
    id: 'type-body-text',
    title: 'Body text sizes'
  },
  {
    id: 'type-inline',
    title: 'Inline text elements'
  },
  {
    id: 'type-abbreviations',
    title: 'Abbreviations'
  },
  {
    id: 'type-blockquote',
    title: 'Blockquote'
  },
  {
    id: 'type-lists',
    title: 'Lists: Unordered and ordered'
  },
  {
    id: 'type-lists-unstyled',
    title: 'Lists: Unstyled'
  },
  {
    id: 'type-lists-inline',
    title: 'Lists: Inline'
  },
  {
    id: 'type-description-list',
    title: 'Description list basic example'
  },
  {
    id: 'type-description-list-align',
    title: 'Description list alignment'
  }
]
</script>
