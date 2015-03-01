describe('angularjs homepage', function() {
  //locators;
  var inputItem   = element(by.model('newTodo'));
  var toggleAll   = element(by.id('toggle-all'));//element(by.model('AllChecked'))
  var removeButton = element(by.className('destroy'));
  var items       = element.all(by.css('.view label'));
  var countOfLeftItems= element(by.css('#todo-count strong'));
  var filterAll   = element(by.css('#filters nth-of-type(1) a'));
  var filterActive = element(by.css('#filters nth-of-type(2) a'));
  var filterCompleted = element(by.css('#filters nth-of-type(3) a'));
  var itemInput      =   element(by.model('todo.completed'));
 // var editElement  = 
 var clearCompletedButton=element(by.id('clear-completed'));


  beforeEach(function() {
    browser.get('http://todomvc.com/examples/angularjs/#/');
  
  });


  var enterItem = function(item){
    inputItem.sendKeys(item);
    inputItem.sendKeys(protractor.Key.ENTER);

  } 
  var deleteItems = function(item){
    var itemEl=element(by.xpath('//label[text()="'+item+'"]'))
    browser.actions().mouseMove(itemEl).perform();
    element(by.xpath('//label[text()="'+item+'"]/following-sibling::button[1]')).click();
  }

  var checkItem = function(number){
    element.all(by.model('todo.completed'));
  }

  var checkAllItems=function(){
    filterAll.click();
    return countOfLeftItems.getText();
  }
  var checkActiveItems=function(){
    filterActive.click();
    return countOfLeftItems.getText();
  }
  var checkCompletedItems=function(){
    filterCompleted.click();
    return countOfLeftItems.getText();
  }
  var clearCompleted=function(){
      clearCompletedButton().click();
  };
  var toggleAllItems=function(){
    toggleAll.click();
  }

  it('It should have active items', function() {
    var firstItem='eating';
    var secondtItem='working';
    var thirdItem='sleep';

    expect(browser.getTitle()).toEqual('AngularJS • TodoMVC');
      
      enterItem(firstItem);
      enterItem(secondtItem);
      enterItem(thirdItem);

      
      

      expect(items.count()).toEqual(3);
      expect(countOfLeftItems.getText()).toEqual('3');
      
      deleteItems(secondtItem);
      itemInput.click();

      expect(countOfLeftItems.getText()).toEqual('1');
      expect(items.count()).toEqual(2);


  });

});