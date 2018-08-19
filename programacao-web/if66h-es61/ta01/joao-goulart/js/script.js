$(document).ready(function(){
    loadChartJava();
    loadChartJavascript();
});

function loadChartJava() {
    var java = document.getElementById("javaSkills").getContext('2d');
    var config = {
        type: 'bar',
        data: {
            datasets: [{
                data: [98, 80, 75, 95, 70, 60],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 80, 64, 1)',
    
                ]
            }],
            labels: [
                'Java',
                'Spring Boot',
                'Hibernate',
                'Java 8 API',
                'Microserviços',
                'Kotlin'
            ],
            borderWidth: 1
    
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Java Skills'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    };
    var myChart = new Chart(java, config);


}

function loadChartJavascript() {
    var javascript = document.getElementById("javascriptSkills").getContext('2d');

    var config2 = {
        type: 'bar',
        data: {
            datasets: [{
                data: [50, 100, 65, 95, 40, 85],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 75, 1)'
                ]
            }],
            labels: [
                'ES7',
                'Ionic',
                'React-Native',
                'Angular',
                'React',
                'Node.js'
            ],
            borderWidth: 1
    
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Javascript skills'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    };
    
    
    
    var myChart2 = new Chart(javascript, config2);
}



