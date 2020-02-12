<template>
  <div id="app">
    <div class="top">
      <div class="header">
        <p class="logo">ToDoList</p>
        <input
          class="input"
          type="text"
          placeholder="添加ToDo"
          v-model="keywords"
          @keydown.enter="add"
        />
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="todo">
          <p class="task">正在进行</p>
          <p class="count">{{links.length-sum}}</p>
        </div>
        <div class="list" v-for="(item,index) of links" :key="item.id" v-show="!item.isSelected">
          <input class="select" type="checkbox" v-model="item.isSelected" />
          <p class="detail">{{item.name}}</p>
          <input class="delete" type="button" @click="del(index)" />
        </div>
        <div class="todo">
          <p class="task">已经完成</p>
          <p class="count">{{sum}}</p>
        </div>
        <div class="lists" v-for="(item,index) of links" :key="index" v-show="item.isSelected">
          <input class="select" type="checkbox" v-model="item.isSelected" />
          <p class="detail">{{item.name}}</p>
          <input class="delete" type="button" @click="del(index)" />
        </div>
      </div>
      <p class="bottom">江南制造</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      keywords: "",
      links: []
    };
  },
  methods: {
    add() {
      if (this.keywords != "") {
        var obj = {};
        obj.name = this.keywords;
        obj.isSelected = false;
        this.links.push(obj);
        this.keywords = "";
      }
    },
    del(index) {
      this.links.splice(index, 1);
    }
  },
  computed: {
    sum() {
      var sum = this.links.filter(item => item.isSelected);
      return sum.length;
    }
  },
  updated() {
    localStorage.setItem("links", JSON.stringify(this.links));
  },
  mounted() {
    var links = localStorage.getItem("links");
    if (links) {
      this.links = JSON.parse(links);
    } else {
      localStorage.setItem("links", "[]");
    }
  }
};
</script>

<style>
.top {
  height: 50px;
  background: rgba(47, 47, 47, 0.98);
}
.header {
  width: 600px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.logo {
  font-size: 24px;
  color: #fff;
  line-height: 50px;
}
.input {
  width: 60%;
  height: 24px;
  margin-top: 12px;
  text-indent: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
    0 1px 6px rgba(0, 0, 0, 0.45) inset;
  border: none;
}
.box {
  background: #cdcdcd;
  height: 1000px;
}
.content {
  width: 600px;
  margin: 0 auto;
}
.todo {
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
}
.task {
  font-size: 24px;
  color: #333;
  font-weight: bolder;
}
.count {
  padding: 0 5px;
  height: 20px;
  border-radius: 20px;
  background: #e6e6fa;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-size: 14px;
  font-weight: bolder;
}
.list,
.lists {
  border-left: 5px solid #629a9c;
  line-height: 32px;
  background: #fff;
  display: flex;
  position: relative;
  margin: 10px 0;
}
.lists {
  opacity: 0.3;
}
.select {
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin-left: 10px;
  margin: 5px;
}
.delete {
  width: 14px;
  border-radius: 14px;
  border: 6px double #fff;
  background: #ccc;
  line-height: 14px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  right: 5px;
}
.bottom {
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-top: 50px;
}
.detail {
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>