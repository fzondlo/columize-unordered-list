// Released under the MIT license
// created by: Frank Zondlo
// Quick and dirty Columnize script

(function($){

 jQuery.fn.columnize = function(num_columns) {

   var li_arr = new Array();

   //Create array of all posts in lists
   $(this).find('li').each(function(){
       li_arr.push($(this).html());
   })

   //Break up the array into managable chunks
   function chunk (arr, number_of_chunks) {

     var chunks = [],
         i = 0,
         n = arr.length;

     closest_divisible_num = n
     while (closest_divisible_num % 2 != 0) {
       closest_divisible_num++
     }

     chunk_size = closest_divisible_num / number_of_chunks

     while (i < n) {
       chunks.push(arr.slice(i, i += chunk_size));
     }

     return chunks;
   }

   // Turns an array list of UL elements into html
   function createHTML(list){
       html = '';
       for (var i = 0; i < list.length; i++) {
           html += '<li>' + list[i] + '</li>'
       };
       return html
   }

   //add the HTML back to the dom tree
   array_chunks = chunk(li_arr, num_columns);
   $(this).html(createHTML(array_chunks[0]));

   for (i = 1; i < num_columns ;i++) {
     $(this).after('<ul></ul>').next().html(createHTML(array_chunks[i]));
   }

 };
})(jQuery);

