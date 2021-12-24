
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");
    for ( var i=1; i<=height; i++)
    {
        var str1 = "";
        for(var j=1; j <= height-i; j++)
        {

            str1 += " ";
            
        }
        for( var j=1; j <= i+1; j++ )
        {
            str1 += "#";


        }

            console.log(str1);

    }
    // TODO
    // print that pyramid!

}
