 var Todos=function(){
  //elements;
  this.inputItem       = element(by.model('newTodo'));
  this.toggleAll       = element(by.id('toggle-all'));//element(by.model('AllChecked'))
  this.items           = element.all(by.css('.view label'));
  this.countOfLeftItems= element(by.css('#todo-count strong'));
  this.filterAll       = element(by.css('#filters li:nth-of-type(1) a'));
  this.filterActive    = element(by.css('#filters li:nth-of-type(2) a'));
  this.filterCompleted = element(by.css('#filters li:nth-of-type(3) a'));
  this.itemInput       = element.all(by.model('todo.completed')); 
  this.itemFields      = element.all(by.repeater('todo in todos'));
  this.clearCompletedButton=element(by.binding('completedCount'));
 this.itemField=function(item){
  return element(by.xpath('//label[text()="'+item+'"]'));
  };
 this.removeButton=function(item){
   return  element(by.xpath('//label[text()="'+item+'"]/following-sibling::button[1]'));
  };
}
    

  Todos.prototype.getPage=function(){
   browser.get('http://todomvc.com/examples/angularjs/#/');
  }

  Todos.prototype.getTitle=function(){
    return browser.getTitle();
  }

  Todos.prototype.enterItem = function(item){
    this.inputItem.sendKeys(item);
    this.inputItem.sendKeys(protractor.Key.ENTER);

  } 

  Todos.prototype.deleteItems = function(item){
    browser.actions().mouseMove(this.itemField(item)).perform();
    this.removeButton(item).click();
  }

  Todos.prototype.checkItem = function(number){
    element.all(by.model('todo.completed'));
  }

  Todos.prototype.checkAllItems=function(){
    this.filterAll.click();
    
  }
  Todos.prototype.checkActiveItems=function(){
    this.filterActive.click();

  }
  Todos.prototype.checkCompletedItems=function(){
    this.filterCompleted.click();
  }
  Todos.prototype.toggleAllItems=function(){
    this.toggleAll.click();
  }

  Todos.prototype.editItem=function(index,newItem){
    var parentEl=this.itemFields.get(index);
    browser.actions().doubleClick(parentEl.element(by.css('label'))).perform();
    parentEl.element(by.model('todo.title')).clear().sendKeys(newItem).sendKeys(protractor.Key.ENTER);
    return this.items.get(index).getText()  
  }
  Todos.prototype.completedItem=function(index){
    this.itemInput.get(index).click();
  }

  Todos.prototype.clearCompleted=function(){
     browser.actions().mouseMove(this.clearCompletedButton).click().perform();
  };


 module.exports = Todos;