<template>
  <div>
    <h2>{{ head }}</h2>
    <div v-if="added">
      You are editing element <b>{{ selector }}</b> with class <b>{{ cls }}</b>
      <span class="hw" v-on:click="save">
        <span class="i-check icon icon-check"></span>
        <span class="s-green">Save</span>
      </span>
      <span class="hw" v-on:click="cancel">
        <span class="i-cancel icon icon-cancel"></span>
        <span class="s-red">Cancel</span>
      </span>
    </div>
    <div v-else>
      <select v-model="selector">
        <option selector>div</option>
        <option>button</option>
        <option>span</option>
        <option>input</option>
      </select>
      <input v-model="cls">
      <button class="btn btn-red" v-on:click="create">Create <b>{{ selector }}</b> element with class <b>{{ cls }}</b></button>
    </div>
    <div v-if="saved">
      <div class="s-green">Saved style for class <b>{{ cls }}</b></div>
    </div>
    <div id="created">
      <div v-if="div">
        <div v-bind:style="style">Editing this element!</div>
      </div>
      <div v-if="button">
        <button v-bind:style="style">Editing this element!</button>
      </div>
      <div v-if="span">
        <span v-bind:style="style">Editing this element!</span>
      </div>
      <div v-if="input">
        <input v-bind:style="style">Editing this element!</input>
      </div>
      <textarea v-model="style" v-if="added"></textarea>
    </div>
  </div>
</template>

<script>
  import lsz from '../store/index'

  export default {
    name: 'Create',
    data () {
      return {
        head: 'Create',
        cls: 'name',
        selector: 'div',
        added: false,
        style: '',
        div: false,
        span: false,
        input: false,
        button: false,
        saved: false
      }
    },
    methods: {
      create () {
        this.added = true
        switch (this.selector) {
          case 'div':
            this.div = true
            break
          case 'button':
            this.button = true
            break
          case 'span':
            this.span = true
            break
          case 'input':
            this.input = true
            break
        }
      },
      save () {
        lsz.set(this.cls, this.style)
        this.cancel()
        this.saved = true
        setTimeout(() => {
          this.saved = false
        }, 2500)
      },
      cancel () {
        this.added = false
        this.div = false
        this.span = false
        this.button = false
        this.input = false
        this.style = ''
      }
    }
  }
</script>

<style>
  .i-check {
    color: #87D37C;
    vertical-align: middle;
    font-weight: 600;
  }

  .i-cancel {
    color: #EF4836;
    vertical-align: middle;
    font-weight: 600;
  }

  .s-green {
    color: #87D37C;
    font-weight: 600;
  }

  .s-red {
    color: #EF4836;
    font-weight: 600;
  }

  textarea {
    display: block;
    width: 450px !important;
    min-height: 200px !important;
    font-size: 18px;
    padding: 4px;
    margin-top: 10px !important;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    resize: vertical;
    outline: 0;
  }

  .hw {
    cursor: pointer;
  }
</style>
