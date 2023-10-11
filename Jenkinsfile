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
                sh 'docker run --name db -e POSTGRES_PASSWORD=1234 -p 5432:5432 -d postgres'
                sh 'docker ps'
            }
        }
    }
    post{
      always{
        sh 'docker rm -f db'
        sh 'docker ps'
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