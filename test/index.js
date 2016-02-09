var expect = require('chai').expect,
  cp = require('child_process'),
  supertest = require('supertest')

var child

describe('server', function () {
  it('must run', function(done){
    child = cp.exec('node server.js',
    function (error, stdout, stderr) {
      expect(stderr).to.equal('')
      if (error !== null) {
        console.log('exec error: ' + error)
      }

    })
    setTimeout(function(){
        done()
    }, 400)
  })
})

describe('server', function () {
  it('must respond with Hello World', function(done){
    supertest('http://localhost:3000').get('/')
      .expect(200)
      .end(function(error, response){
        var killResult = child.kill()
        expect(killResult).to.be.true
        done()
      })
  })
})

