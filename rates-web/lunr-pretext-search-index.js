var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "related-rates-document",
  "level": "1",
  "url": "#related-rates-document",
  "type": "Article",
  "number": "",
  "title": "Section 2.6 Related Rates",
  "body": " Section 2.6 Related Rates   Section 2.6 Related Rates    Problem Solving Procedure   Draw a picture and name the variables and constants.  Write down the numerical information.  Write down what you are asked to find.  Write an equation that relates to the variables.  Differentiate.  Evaluate.       A hot air balloon rising straight up from a level field is tracked by a range finder from the liftoff point. At the moment the range finder's elevation angle is , the angle is increasing at the rate of . How fast is the balloon rising at that moment?        Water runs into a conical tank at the rate of . The tank stands point down and has a height of and a base radius of . How fast is the water level rising when the water is deep?        There is a rope running through a pulley and bearing a weight at one end. The other end is held above the ground in the hand of a worker. Suppose that the pulley is above the ground, the rope is long, and the worker is walking away from the weight at a rate of . How fast is the weight raised when the worker's hand is away from the weight's starting position?        Sand falls from an overhead bin and accumulates in a conical pile with a radius that is always three times its height. Suppose the height of the pile increases at a rate of when the pile is high. At what rate is sand leaving the bin at that instant?      "
},
{
  "id": "related-rates-balloon",
  "level": "2",
  "url": "#related-rates-balloon",
  "type": "Worksheet Exercise",
  "number": "1.1",
  "title": "",
  "body": "  A hot air balloon rising straight up from a level field is tracked by a range finder from the liftoff point. At the moment the range finder's elevation angle is , the angle is increasing at the rate of . How fast is the balloon rising at that moment?   "
},
{
  "id": "related-rates-conical-tank",
  "level": "2",
  "url": "#related-rates-conical-tank",
  "type": "Worksheet Exercise",
  "number": "1.2",
  "title": "",
  "body": "  Water runs into a conical tank at the rate of . The tank stands point down and has a height of and a base radius of . How fast is the water level rising when the water is deep?   "
},
{
  "id": "related-rates-pulley",
  "level": "2",
  "url": "#related-rates-pulley",
  "type": "Worksheet Exercise",
  "number": "1.3",
  "title": "",
  "body": "  There is a rope running through a pulley and bearing a weight at one end. The other end is held above the ground in the hand of a worker. Suppose that the pulley is above the ground, the rope is long, and the worker is walking away from the weight at a rate of . How fast is the weight raised when the worker's hand is away from the weight's starting position?   "
},
{
  "id": "related-rates-sand-pile",
  "level": "2",
  "url": "#related-rates-sand-pile",
  "type": "Worksheet Exercise",
  "number": "1.4",
  "title": "",
  "body": "  Sand falls from an overhead bin and accumulates in a conical pile with a radius that is always three times its height. Suppose the height of the pile increases at a rate of when the pile is high. At what rate is sand leaving the bin at that instant?   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
