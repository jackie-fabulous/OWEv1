window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var style = document.createElement('style');
style.innerHTML = `
    [data-acc-text^="Step"] div {
        overflow: hidden;
    }
    [data-acc-text^="Step"] svg {
        transition: transform 2s ease;
        transform-origin: center center;
    }
    [data-acc-text^="Step"] svg:hover {
        transform: scale(1.4);
    }
`;
document.head.appendChild(style);

}

};
