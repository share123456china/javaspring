$(function () {
  $('ol li').click(function () {
    $(this).addClass('active').siblings('li').removeClass('active')
    var d = $("input[name=d]").val()
    var n_val = $(this).attr("data-name")
    $("input[name=d]").val(d+''+n_val)
  })
  $('.content-all .pageOne ol li').click(function () {
    var _this = $(this)
    setTimeout(function () {
      _this.parents('.pageOne').removeClass('active').siblings('.pageTwo').addClass('active')
    }, 1000)
  })


  $('.content-all-three .pageOne ol li').click(function () {
      var _this = $(this)
      setTimeout(function () {
          _this.parents('.pageOne').removeClass('active').siblings('.pageTwo').addClass('active')
      }, 1000)
  })


  $('.nextFirst').click(function () {
    $(this).parents('.pageOne').removeClass('active').siblings('.pageTwo').addClass('active')
  })
  $('.pageTwo .prev').click(function () {
    $(this).parents('.pageTwo').removeClass('active').siblings('.pageOne').addClass('active')
  })
  $('.pageTwo .next').click(function () {
    var c1 = $(this).parents('.pageTwo').find("div.contentIn:eq(0) li").hasClass('active')
    var c2 = $(this).parents('.pageTwo').find("div.contentIn:eq(1) li").hasClass('active')
    if(c1 && c2){
      $(this).parents('.pageTwo').removeClass('active').siblings('.pageThree').addClass('active')
    }else{
      alert("请选择您的年龄和性别")
    }
  })
  $('.pageThree .prev').click(function () {
    $(this).parents('.pageThree').removeClass('active').siblings('.pageTwo').addClass('active')
  })
  $('.pageThree .next').click(function () {
    var d1 = $(this).parents('.pageThree').find("div.contentIn:eq(0) li").hasClass('active')
    if(d1){
      $(this).parents('.pageThree').removeClass('active').siblings('.pageFour').addClass('active')
    }else{
      alert("请选择您喜欢的风格")
    }
  })
  $('.pageFour .prev').click(function () {
    $(this).parents('.pageFour').removeClass('active').siblings('.pageThree').addClass('active')
  })

  $('.bottomBar span').click(function () {
    $(this).parents('.bottomBar').removeClass('active')
    $('.bottomBtn').addClass('active')
    $('.content-all').css({ 'margin-bottom': '0' })
    $('footer').css({ 'margin-bottom': '0' })
  })
  $('.bottomBtn').click(function () {
    $(this).removeClass('active')
    $('.bottomBar').addClass('active')
    $('.content-all').css({ 'margin-bottom': '120px' })
    $('footer').css({ 'margin-bottom': '120px' })
  })


  $('.threeBottomBar span').click(function () {
      $(this).parents('.threeBottomBar').removeClass('active')
      $('.threeBottomBtn').addClass('active')
      $('.content-all-three').css({ 'margin-bottom': '0' })
      $('footer').css({ 'margin-bottom': '0' })
  })
  $('.threeBottomBtn').click(function () {
      $(this).removeClass('active')
      $('.threeBottomBar').addClass('active')
      $('.content-all-three').css({ 'margin-bottom': '198px' })
      $('footer').css({ 'margin-bottom': '198px' })
  })


  $('.TanBox .tanRight .twoLine h4 .span').click(function () {
    $(this).addClass('active').siblings('.span').removeClass('active')
  })
  $('.TanBox .tanClose').click(function () {
    $('.TanBox').stop().fadeOut()
  })
})
