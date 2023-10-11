pipeline {
    agent any
    stages {
        stage("Version"){
          steps {
            sh 'docker --version'
            sh 'node --version'
            sh 'npm --version'
          }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npx prisma generate'
                sh 'npx prisma migrate dev --name init'
                sh 'npm run dev'
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