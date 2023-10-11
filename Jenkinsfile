pipeline {
    agent any
    stages {
        stage("Version"){
          steps {
            sh 'docker --version'
          }
        }
        stage('Build') {
            steps {
                sh 'docker-compose up'
                sh 'docker-compose ps'
            }
        }
    }
    post{
      always{
        sh 'docker-compose down --remove-orphans -v'
        sh 'docker-compose ps'
      }
    }
}

// pipeline{
//     agent any
//     stages{
//         stage("teste"){
//             steps{
//                 sh 'docker --version'
//             }
//         }
//     }
// }