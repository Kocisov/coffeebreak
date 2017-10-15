<template>
  <div>
    <h2>Create</h2>
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
    <div v-show="saved">
      <div class="s-green">Saved style for class <b>{{ cls }}</b></div>
    </div>
    <div class="flex">
      <div class="box">
        <h2 v-show="added">Preview</h2>
        <div id="created">
          <div v-show="div">
            <div v-bind:style="style">Editing this element!</div>
          </div>
          <div v-show="button">
            <button v-bind:style="style">Editing this element!</button>
          </div>
          <div v-show="span">
            <span v-bind:style="style">Editing this element!</span>
          </div>
          <div v-show="input">
            <input v-bind:style="style">Editing this element!</input>
          </div>
        </div>
      </div>
      <div class="box">
        <h2 v-show="added">Code</h2>
        <textarea class="full-width" v-model="style" v-show="added"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cls: 'name',
      selector: 'div',
      added: false,
      style: '',
      div: false,
      span: false,
      input: false,
      button: false,
      saved: false,
    }
  },
  methods: {
    create() {
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

        default:
          return false
      }
    },
    save() {
      this.$store.dispatch({
        type: 'CREATE_STYLE',
        name: this.cls,
        style: this.style,
      })

      this.cancel()
      this.saved = true

      setTimeout(() => {
        this.saved = false
      }, 1500)
    },
    cancel() {
      this.added = false
      this.div = false
      this.span = false
      this.button = false
      this.input = false
      this.style = ''
    },
  },
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

  .full-width {
    display: block;
    width: 100% !important;
  }

  .hw {
    cursor: pointer;
  }
</style>
