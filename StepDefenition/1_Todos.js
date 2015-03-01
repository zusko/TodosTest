
var TodosPage=require('../PageObject/todos.js');

describe('Todos page', function() {
  
 
 var page;
 var firstItem='eating';
 var secondItem='working';
 var thirdItem='sleep';
  
  beforeEach(function() {

     browser.manage().window().maximize();
     page = new TodosPage();
     page.getPage();
     page.enterItem(firstItem);
     page.enterItem(secondItem);
     page.enterItem(thirdItem);

  });
  afterEach(function(){
    page.checkCompletedItems();
    page.toggleAllItems();
    page.clearCompleted();
  });
  
  it('check title',function(){
        expect(page.getTitle()).toEqual('AngularJS • TodoMVC');
        
   });
  
  it('check toggle button', function() {
    
    page.toggleAllItems();
    page.checkAllItems();
    expect(page.items.count()).toEqual(3);
    expect(page.countOfLeftItems.getText()).toEqual('0');
    
    page.checkActiveItems();
    expect(page.items.count()).toEqual(0);
    
    page.checkCompletedItems();
    expect(page.items.count()).toEqual(3);

    page.toggleAllItems();

    page.checkAllItems();
    expect(page.countOfLeftItems.getText()).toEqual('3');
    expect(page.items.count()).toEqual(3);

    page.checkActiveItems();
    expect(page.items.count()).toEqual(3);
    
    page.checkCompletedItems();
    expect(page.items.count()).toEqual(0);
 
});

  it(' Check all,active,checked  buttons in general', function() {
    
    page.checkAllItems();   
    expect(page.items.count()).toEqual(3);
    expect(page.countOfLeftItems.getText()).toEqual('3');
  
    page.checkActiveItems();
    expect(page.items.count()).toEqual(3);
    
    page.checkCompletedItems();
    expect(page.items.count()).toEqual(0);
    
   /***/
    page.checkActiveItems();
    page.deleteItems(secondItem);

    page.checkAllItems();
    expect(page.countOfLeftItems.getText()).toEqual('2');
    expect(page.items.count()).toEqual(2);
 
    page.checkActiveItems();   
    expect(page.items.count()).toEqual(2);

    page.checkCompletedItems();
    expect(page.items.count()).toEqual(0);

    /***/
    page.checkAllItems();
    page.completedItem(0);
    expect(page.countOfLeftItems.getText()).toEqual('1');
    expect(page.items.count()).toEqual(2);

    page.checkActiveItems();   
    expect(page.items.count()).toEqual(1);

    page.checkCompletedItems();
    expect(page.items.count()).toEqual(1);


  });


 it('edit items', function() {
    expect(page.editItem(0,'firstChange')).toEqual('firstChange');
    expect(page.editItem(1,'secondChange')).toEqual('secondChange');

 });

});