# simple-sortable

Simple vanilla sortable library, zero dependencies.

#### Start with a simple list with each element having it's own data id

    <ul class="simple-sortable">
        <li data-id="1">1 Bob</li>
        <li data-id="2">2 Frank</li>
        <li data-id="3">3 Sam</li>
        <li data-id="4">4 Zack</li>
    </ul>

#### Init the library
       
      SimpleSortable(handler)
      
##### handler will receive the new order

      SimpleSortable(function(newOrder){
            console.log(newOrder);
      })
