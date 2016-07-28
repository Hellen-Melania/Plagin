(function ( $ ) {
 
    $.fn.trunc = function(n) {
        var fullText = this.text(),
        	that = this;

        if(fullText.length > n) {
        	limitText = fullText.substr(0, n);
        	this.text(limitText);
        }

        $(that).append("<a href='Javascript:void(0);'> &#8230;</a>");
      
        $(that).find("a").on('click', function(e) {
        	e.preventDefault();
        	$(that).text(fullText);
        });

        return this;
    };
}( jQuery ));