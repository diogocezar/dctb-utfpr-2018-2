const menuNavList      = document.getElementById( "menuNavList" )
const menuOptions      = document.getElementById( "menuOptions" );
const menuOptionsLinks = menuOptions.querySelectorAll( "a" );

// Menu

function switchActive( parent, item ) {
  const current = parent.querySelector( ".active" );
  current.classList.remove( "active" );
  item.classList.add( "active" );
}

menuOptionsLinks.forEach( ( link ) => {
  link.addEventListener( "click", () => {
    const value = link.getAttribute( "href" ).replace( '#', '' );
    menuNavList.style.justifyContent = value;
    switchActive( menuOptions, link );
  } );
} );

// Task List

const taskList = document.getElementById( "taskList" );
const tasks    = taskList.querySelectorAll( ".task-list_task" );

function changeTask( taskList, task, number, direction ) {
  
  if( direction === "up" ) {
    const previous = taskList.querySelector( ".task-list_task[data-order=\"" + ( parseInt( task.dataset.order ) - 1 ) + "\"]" );

    if( previous ) {
      const previousNumber = previous.querySelector( ".task-list_order-number" );

      previous.style.order     = parseInt( previous.style.order ) + 1;
      task.style.order         = parseInt( task.style.order ) - 1;
      previous.dataset.order   = previous.style.order;
      task.dataset.order       = task.style.order;
      previousNumber.innerText = previous.style.order;
      number.innerText         = task.style.order;
    }
  } 
  else if( direction === "down" ) {
    const next = taskList.querySelector( ".task-list_task[data-order=\"" + ( parseInt( task.dataset.order ) + 1 ) + "\"]" );
    console.log( ".task-list_task[data-order=\"" + ( task.dataset.order + 1 ) + "\"]" );

    if( next ) {
      const nextNumber = next.querySelector( ".task-list_order-number" );

      next.style.order     = parseInt( next.style.order ) - 1;
      task.style.order     = parseInt( task.style.order ) + 1;
      next.dataset.order   = next.style.order;
      task.dataset.order   = task.style.order;
      nextNumber.innerText = next.style.order;
      number.innerText     = task.style.order;
    }
  }
}

function loadTasks( tasks ) {
  tasks.forEach( ( task, key ) => {
    const number = task.querySelector( ".task-list_order-number" );
    const up     = task.querySelector( ".task-list_order-buttons .up" );
    const down   = task.querySelector( ".task-list_order-buttons .down" );

    task.style.order   = key + 1;
    task.dataset.order = key + 1;
    number.innerText   = key + 1;

    up.addEventListener( "click", () => {
      changeTask( taskList, task, number, "up" );
    } );
    down.addEventListener( "click", () => {
      changeTask( taskList, task, number, "down" );
    } )
  } );
}

window.addEventListener( "DOMContentLoaded", () => {
  loadTasks( tasks );
} );