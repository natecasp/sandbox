function runMulti(){

var container = document.getElementById("sandbox");
      var width = container.offsetWidth;
      var height = container.offsetHeight;
      console.log(width, height);
      var stage = new Konva.Stage({
        container: 'sandbox',
        width: width,
        height: height,
      });

      var layer = new Konva.Layer();
      stage.add(layer);
			
      var layer2 = new Konva.Layer();
      stage.add(layer2);
      
      var od = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius:250,
      fill: '#8ac1c3',
      name: 'outer'
      });
      layer.add(od);
      var verticalAxis = new Konva.Line({
      points: [stage.width()/2, (stage.height()-500)/2, stage.width()/2, (((stage.height()-500)/2)+500)],
      strokeWidth:1,
      stroke:'gray',
        zIndex: 5
      })
      
      var horizontalAxis = new Konva.Line({
      points: [(stage.width()-500)/2, stage.height()/2, (((stage.width()-500)/2)+500), stage.height()/2],
      strokeWidth:1,
      stroke:'gray'
      })
      var layer4 = new Konva.Layer();
      stage.add(layer4);
      layer4.add(horizontalAxis);
      layer4.add(verticalAxis);
      var tear = new Konva.Path({
        x: 700,
        y: 45,
        data: 'm49.31,43.09c0,13.62-11.04,24.65-24.65,24.65S0,56.71,0,43.09,11.04,0,24.65,0s24.65,29.48,24.65,43.09Z',
        fill: 'white',
        stroke: '#8ac1c3',
        strokeWidth: 2,
        name:'circle',
        scaleX: 1.5,
        scaleY: 1.5,
        draggable:true
      });
      layer2.add(tear);
      
      tear.on('dragstart', function() {
      tear.stopDrag();
      
      var tearclone = tear.clone({
      x: 700,
      y: 45
      });
      tearclone.off('dragstart');
      layer2.add(tearclone);
      tearclone.startDrag();
      });
      
      var pear = new Konva.Path({
        x: 600,
        y: 45,
        data: 'm40.09,16.5v-.66c0-8.29-6.37-15.43-14.66-15.82C16.58-.4,9.28,6.65,9.28,15.4v1.38c0,5.29-1.79,10.37-4.83,14.7S-.41,41.65.09,47.7c.99,12.09,10.92,21.8,23.02,22.55,14.34.89,26.25-10.48,26.25-24.63,0-5.2-1.61-10.03-4.36-14-3.09-4.47-4.92-9.68-4.92-15.12Z',
        fill: 'white',
        stroke: '#8ac1c3',
        strokeWidth: 2,
        name:'circle',
        scaleX: 1.5,
        scaleY: 1.5,
        draggable:true
      });
      layer2.add(pear);
      
      pear.on('dragstart', function() {
      pear.stopDrag();
      
      var pearclone = pear.clone({
      x: 600,
      y: 45
      });
      pearclone.off('dragstart');
      layer2.add(pearclone);
      pearclone.startDrag();
      });
      
      var quarter = new Konva.Path({
        x: 500,
        y: 45,
        data: 'm28.19,41.59c-.31-15.1-12.51-27.29-27.62-27.59C.25,13.99,0,13.74,0,13.43V.77C0,.34.35,0,.78,0c22.65.41,40.99,18.76,41.4,41.4,0,.43-.34.78-.77.78h-12.62c-.33,0-.6-.27-.6-.6Z',
        fill: 'white',
        stroke: '#8ac1c3',
        strokeWidth: 2,
        name:'circle',
        scaleX: 1.5,
        scaleY: 1.5,
        draggable:true
      });
      layer2.add(quarter);

      quarter.on('dragstart', function() {
      quarter.stopDrag();
      
      var quarterclone = quarter.clone({
      x: 500,
      y: 45
      });
      quarterclone.off('dragstart');
      layer2.add(quarterclone);
      quarterclone.startDrag();
      });
    
      var bowl = new Konva.Path({
        x: 400,
        y: 45,
        data: 'm1.42,0h11.18c.74,0,1.37.57,1.41,1.32.69,14.94,13.06,26.88,28.16,26.88s27.47-11.94,28.16-26.88c.03-.74.67-1.32,1.41-1.32h11.18c.79,0,1.44.65,1.42,1.44-.76,22.6-19.38,40.75-42.17,40.75S.76,24.04,0,1.44C-.03.65.63,0,1.42,0Z',
        fill: 'white',
        stroke: '#8ac1c3',
        strokeWidth: 2,
        name:'circle',
        scaleX: 1,
        scaleY: 1,
        draggable:true
      });
      layer2.add(bowl);
     
      bowl.on('dragstart', function() {
      bowl.stopDrag();
      
      var bowlclone = bowl.clone({
      x: 400,
      y: 45
      });
      bowlclone.off('dragstart');
      layer2.add(bowlclone);
      bowlclone.startDrag();
      });
      
      var sourcecircle = new Konva.Circle({
        x: 150,
        y: 60,
        radius: 35,
        fill: 'white',
        stroke: '#8ac1c3',
        strokeWidth: 2,
        name: 'circle',
        draggable: true,
        offset: 15,
        
        
        
      });
      layer2.add(sourcecircle);
      
      var cres = new Konva.Path({
        x: 300,
        y: 45,
        data: 'm56.89.19c.75-.4,1.74-.16,2.1.61.11.24.17.51.15.79-.9,15.55-13.79,27.88-29.57,27.88S.9,17.14,0,1.59h0C-.06.42,1.19-.37,2.23.18l1.58,1.1c15.48,10.8,36.05,10.8,51.53,0l1.55-1.08Z',
        fill: 'white',
        stroke: '#8ac1c3',
        strokeWidth: 2,
        name:'circle',
        scaleX: 1.5,
        scaleY: 1.5,
        draggable:true
      });
      layer2.add(cres);
      
      cres.on('dragstart', function() {
      cres.stopDrag();
      
      var cresclone = cres.clone({
      x: 300,
      y: 45
      });
      cresclone.off('dragstart');
      layer2.add(cresclone);
      cresclone.startDrag();
      });
      
      var semi = new Konva.Path({
        x: 200,
        y: 45,
        data: 'm68.45.5c1.12,0,2,.95,1.93,2.06-1.07,18.37-16.3,32.94-34.94,32.94S1.57,20.93.5,2.56c-.06-1.11.81-2.06,1.93-2.06h66.02Z',
        fill: 'white',
        stroke: '#8ac1c3',
        strokeWidth: 2,
        name:'circle',
        width:70,
        height: 36,
        
        
        draggable:true,
        
      });
      
      layer2.add(semi);

      semi.on('dragstart', function() {
      semi.setAttrs({
        offsetX: semi.width()/2,
        offsetY: semi.height()/2
      })
      semi.stopDrag();
    
      var clone = semi.clone({
      x: 150,
      y: 60,
      id: "id" + Math.random().toString(16).slice(2),
      });
      clone.off('dragstart');
      
      layer2.add(clone);
      clone.startDrag();
      clone.on('dragend', function(e){
        var oldLines = stage.find('.' + e.target.attrs.id);
        for (let i = 0; i < oldLines.length; ++i) {
    oldLines[i].destroy();
  }
  e.target.removeName('selected');
         
  e.target.addName('selected');
  
        var vertical = new Konva.Line({
    points: [e.target.attrs.x,e.target.attrs.y,e.target.attrs.x, stage.height()/2],
        stroke: 'gray',
        strokeWidth: 1,
        name: e.target.attrs.id
  });
  var horizontal = new Konva.Line({
    points: [e.target.attrs.x,e.target.attrs.y,stage.width()/2, e.target.attrs.y],
        stroke: 'gray',
        strokeWidth: 1,
        name: e.target.attrs.id
  });
  //group.add(e.target, vertical, horizontal);
  layer2.add(vertical);
  layer2.add(horizontal);
        
  //ADD GUI
  if($("#"+e.target.attrs.id).length == 0){
  var radius = `<div id="`+e.target.attrs.id+`"><input class="radius" placeholder="radius"></input><input type="number" class="x" placeholder="x"></input><input type="number" class="y" placeholder="y"></input></div>`;
  $("#controls").append(radius);
  $(".radius").change(function(e){
  var element = stage.find('#'+e.target.parentNode.id);
  var od = document.getElementById('outer-diameter').value;
  element[0].setAttrs({
    scaleX: (this.value/(od/500))/70,
    scaleY: (this.value/(od/500))/70,
  })
});
    
$(".y").change(function(e){
  var element = stage.find('#'+e.target.parentNode.id);
  
  var baseshape = stage.find('.outer');
  var od = document.getElementById('outer-diameter').value;
  element[0].setAttrs({
    
    y: (-this.value/(od/500))+baseshape[0].attrs.y,
  })
  var oldLines = stage.find('.' + e.target.parentNode.id);
  if (oldLines.length > 0) {
  oldLines[0].setAttrs({
    points: [element[0].attrs.x,element[0].attrs.y,element[0].attrs.x, stage.height()/2] 
  });
    
 oldLines[1].setAttrs({
   points: [element[0].attrs.x,element[0].attrs.y,stage.width()/2, element[0].attrs.y]
 });
 }
});
    
$(".x").change(function(e){
  var element = stage.find('#'+e.target.parentNode.id);
  
  var baseshape = stage.find('.outer');
  var od = document.getElementById('outer-diameter').value;
  element[0].setAttrs({
    
    x: (this.value/(od/500))+baseshape[0].attrs.x,
  })
  var oldLines = stage.find('.' + e.target.parentNode.id);
  if (oldLines.length > 0) {
  oldLines[0].setAttrs({
    points: [element[0].attrs.x,element[0].attrs.y,element[0].attrs.x, stage.height()/2] 
  });
    
 oldLines[1].setAttrs({
   points: [element[0].attrs.x,element[0].attrs.y,stage.width()/2, element[0].attrs.y]
 });
 }
});
  }
        clone.on('transform', function(e){
          var od = document.getElementById('outer-diameter').value;
var diameter = (e.target.width()*e.target.attrs.scaleX) * (od/500);
console.log(e.target.width()*e.target.attrs.scaleX);
$("#"+e.target.attrs.id).find('.radius').val(diameter.toFixed(3));

});
      });
      
      });
      


  //    layer2.on('dragstart', function(e) {
  //      e.target.stopDrag();
  //      var clone = e.target.clone({
  //        x: e.target.attrs.x,
  //        y: e.target.attrs.y
  //      });
  //      clone.off('dragstart');
  //      layer2.add(clone);
  //      clone.startDrag();
  //    });

      sourcecircle.on('dragstart', function() {
      sourcecircle.stopDrag();
    
      var clone = sourcecircle.clone({
      x: 150,
      y: 60,
      id: "id" + Math.random().toString(16).slice(2),
      });
      clone.off('dragstart');
      
      layer2.add(clone);
      clone.startDrag();
      clone.on('dragend', function(e){
     
        
        var oldLines = stage.find('.' + e.target.attrs.id);
        for (let i = 0; i < oldLines.length; ++i) {
    oldLines[i].destroy();
  }
  e.target.removeName('selected');
         console.log(stage.find('.selected'));
  e.target.addName('selected');
  console.log(stage.find('.selected'));
        var vertical = new Konva.Line({
    points: [e.target.attrs.x,e.target.attrs.y,e.target.attrs.x, stage.height()/2],
        stroke: 'gray',
        strokeWidth: 1,
        name: e.target.attrs.id
  });
  var horizontal = new Konva.Line({
    points: [e.target.attrs.x,e.target.attrs.y,stage.width()/2, e.target.attrs.y],
        stroke: 'gray',
        strokeWidth: 1,
        name: e.target.attrs.id
  });
  //group.add(e.target, vertical, horizontal);
  layer2.add(vertical);
  layer2.add(horizontal);
        
  //ADD GUI
  if($("#"+e.target.attrs.id).length == 0){
    var od = document.getElementById('outer-diameter').value;
 var baseshape = stage.find('.outer');
  var radius = `<div id="`+e.target.attrs.id+`"><input class="radius" value="`+(e.target.width()*e.target.attrs.scaleX) * (od/500)+`"></input><input type="number" class="x" value="`+(Math.abs(e.target.attrs.x - baseshape[0].attrs.x) * (od/500)).toFixed(3)+`"></input><input type="number" class="y" value="`+(Math.abs(e.target.attrs.y - baseshape[0].attrs.y) * (od/500)).toFixed(3)+`"></input></div>`;
  $("#controls").append(radius);
  $(".radius").change(function(e){
  var element = stage.find('#'+e.target.parentNode.id);
  var od = document.getElementById('outer-diameter').value;
  element[0].setAttrs({
    scaleX: (this.value/(od/500))/70,
    scaleY: (this.value/(od/500))/70,
  })
});
    
$(".y").change(function(e){
  var element = stage.find('#'+e.target.parentNode.id);
  
  var baseshape = stage.find('.outer');
  var od = document.getElementById('outer-diameter').value;
  element[0].setAttrs({
    
    y: (-this.value/(od/500))+baseshape[0].attrs.y,
  })
  var oldLines = stage.find('.' + e.target.parentNode.id);
  if (oldLines.length > 0) {
  oldLines[0].setAttrs({
    points: [element[0].attrs.x,element[0].attrs.y,element[0].attrs.x, stage.height()/2] 
  });
    
 oldLines[1].setAttrs({
   points: [element[0].attrs.x,element[0].attrs.y,stage.width()/2, element[0].attrs.y]
 });
    
 }
  
});
    
$(".x").change(function(e){
  var element = stage.find('#'+e.target.parentNode.id);
  
  var baseshape = stage.find('.outer');
  var od = document.getElementById('outer-diameter').value;
  element[0].setAttrs({
    
    x: (this.value/(od/500))+baseshape[0].attrs.x,
  })
  var oldLines = stage.find('.' + e.target.parentNode.id);
  if (oldLines.length > 0) {
  oldLines[0].setAttrs({
    points: [element[0].attrs.x,element[0].attrs.y,element[0].attrs.x, stage.height()/2] 
  });
    
 oldLines[1].setAttrs({
   points: [element[0].attrs.x,element[0].attrs.y,stage.width()/2, element[0].attrs.y]
 });
 }
});
  }
        clone.on('transform', function(e){
          var od = document.getElementById('outer-diameter').value;
var diameter = (e.target.width()*e.target.attrs.scaleX) * (od/500);
console.log(e.target.width()*e.target.attrs.scaleX);
$("#"+e.target.attrs.id).find('.radius').val(diameter.toFixed(3));

});
      });
      
      });
			

      cres.fillAfterStrokeEnabled(true);
      semi.fillAfterStrokeEnabled(true);
      sourcecircle.fillAfterStrokeEnabled(true);
      tear.fillAfterStrokeEnabled(true);
      quarter.fillAfterStrokeEnabled(true);
      pear.fillAfterStrokeEnabled(true);
      bowl.fillAfterStrokeEnabled(true);

      var tr = new Konva.Transformer({
      nodes: [sourcecircle, semi, cres, bowl, quarter, pear, tear],
      centeredScaling: true,
      });
      layer2.add(tr);
      

      var selectionRectangle = new Konva.Rect({
        fill: 'rgba(0,0,255,0.5)',
        visible: false,
        name: 'transformer',
        
        
      });
      layer2.add(selectionRectangle);

      var x1, y1, x2, y2;
      stage.on('mousedown touchstart', (e) => {

        if (e.target !== stage) {
          return;
        }
        e.evt.preventDefault();
        x1 = stage.getPointerPosition().x;
        y1 = stage.getPointerPosition().y;
        x2 = stage.getPointerPosition().x;
        y2 = stage.getPointerPosition().y;

        selectionRectangle.visible(true);
        selectionRectangle.width(0);
        selectionRectangle.height(0);
      });

      stage.on('mousemove touchmove', (e) => {
        
        if (!selectionRectangle.visible()) {
          return;
        }
        e.evt.preventDefault();
        x2 = stage.getPointerPosition().x;
        y2 = stage.getPointerPosition().y;

        selectionRectangle.setAttrs({
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1),
        });
        
        
      });

      stage.on('mouseup touchend', (e) => {

        if (!selectionRectangle.visible()) {
          return;
        }
        e.evt.preventDefault();

        setTimeout(() => {
          selectionRectangle.visible(false);
        });

        var shapes = stage.find('.circle');
        var box = selectionRectangle.getClientRect();
        var selected = shapes.filter((shape) =>
          Konva.Util.haveIntersection(box, shape.getClientRect())
        );
        tr.nodes(selected);
      });


      stage.on('click tap', function (e) {

        if (selectionRectangle.visible()) {
          return;
        }

        if (e.target === stage) {
          tr.nodes([]);
          return;
        }

        //
        if (!e.target.hasName('circle')) {
          return;
        }

        //
        const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey;
        const isSelected = tr.nodes().indexOf(e.target) >= 0;

        if (!metaPressed && !isSelected) {
          //
          tr.nodes([e.target]);
        } else if (metaPressed && isSelected) {
          //
          const nodes = tr.nodes().slice(); // 
          // remove node from array
          nodes.splice(nodes.indexOf(e.target), 1);
          tr.nodes(nodes);
        } else if (metaPressed && !isSelected) {
          // add the node into selection
          const nodes = tr.nodes().concat([e.target]);
          tr.nodes(nodes);
        }
      });
      
      layer2.on('mouseover', function (e) {
        e.target
        stage.container().style.cursor = 'move';
        
      });

layer2.on('mouseout', function (e) {
        e.target
        stage.container().style.cursor = 'default';
        
      });

      layer2.on('click', function (e) {
        e.target.removeName('click-selected');
        e.target.addName('click-selected');
        
        e.target.removeName('circle');
        e.target.addName('circle');
        
        
        
      });

layer2.on('dragmove', function(e){
  console.log(e.target.width())
 var oldLines = stage.find('.' + e.target.attrs.id);
  if (oldLines.length > 0) {
    
  
  oldLines[0].setAttrs({
    points: [e.target.attrs.x,e.target.attrs.y,e.target.attrs.x, stage.height()/2]
    
    
  });
    
 oldLines[1].setAttrs({
   points: [e.target.attrs.x,e.target.attrs.y,stage.width()/2, e.target.attrs.y]
 });
  
 
 }
 var od = document.getElementById('outer-diameter').value;
 var baseshape = stage.find('.outer');
  
$("#"+e.target.attrs.id).find('.x').val((Math.abs(e.target.attrs.x - baseshape[0].attrs.x) * (od/500)).toFixed(3));

$("#"+e.target.attrs.id).find('.y').val((Math.abs(e.target.attrs.y - baseshape[0].attrs.y) * (od/500)).toFixed(3));
});



var od = document.getElementById('outer-diameter').value;
$("#outer-diameter").change(function(e){
  var od = this.value;
  
  function converter() {
  var factor = od/500;
};
  
  converter();
})


$('html').keyup(function(e){
    if(e.keyCode == 46) {
  var test = layer2.find('.selected');
  var ifClick = layer2.find('.click-selected');
  $("#"+test[0].attrs.id).remove();
  var oldLines = stage.find('.' + test.slice(-1)[0].attrs.id);
        for (let i = 0; i < oldLines.length; ++i) {
    oldLines[i].destroy();
  }
  if(ifClick.length != 0){
  ifClick[0].destroy();
  } else {
  test.slice(-1)[0].destroy();
    }
  layer2.draw();
  selectionRectangle.visible(false);
    }
  
});
$('input:.radius').change(function(e){
var target = e.target.parentNode.id;
console.log(target);
});


}
