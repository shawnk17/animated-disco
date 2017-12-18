var edit = document.getElementById("text");

('/.edit').click(function(){
    (this).hide();
    ('/.box').addClass('editable');
    ('/.text').attr('contenteditable', 'true');  
    ('/.save').show();
    res.redirect("/");
  });
  
  ('.save').click(function(){
    (this).hide();
    ('/.box').removeClass('editable');
    ('/.text').removeAttr('contenteditable');
    ('/.edit').show();
    res.redirect("/");
  });