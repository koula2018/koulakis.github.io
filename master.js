$(function () {
  $(".tab-link").click(function (e) {
      e.preventDefault();
      $('a[href="' + $(this).attr('href') + '"]').tab('show');
  })
});
function allChildren(action, element, ...params) {
  [].forEach.call(
    $(element).children(),
    child => {
      $(child)[action](...params);
      allChildren(action, child, ...params);
    });
}
var isTop = true;
var myblue = '#337ab7';
var animationSpeed = 'slow';

var movedToBottom = scroll => scroll > 40 && isTop;
var movedToTop = scroll => scroll <= 40 && !isTop;
function initializeHeader() {
  $('#header').css('backgroundColor', 'rgba(0, 0, 0, 0)');
  allChildren(
    'css',
    $('#header'),
    'color',
    'white');
  isTop = true;
}
function configHeaderBottom() {
  $('#header').animate({ 'backgroundColor': 'rgba(255, 255, 255, 0.95)' }, animationSpeed);
  allChildren(
    'animate',
    $('#header'),
    { 'color': myblue },
    animationSpeed);
  isTop = false;
}
function configHeaderTop() {
  $('#header').animate({ 'backgroundColor': 'rgba(0, 0, 0, 0)' }, animationSpeed);
  allChildren(
    'animate',
    $('#header'),
    { 'color': 'white' },
    animationSpeed);
  isTop = true;
}

$(document).ready(initializeHeader);
$(window).scroll(() => {
  scroll = $(window).scrollTop()
  if(movedToBottom(scroll)) configHeaderBottom()
  else if(movedToTop(scroll)) configHeaderTop()
});
