pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'docker-compose up -d --no-color --wait'
                sh 'docker-compose ps'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
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