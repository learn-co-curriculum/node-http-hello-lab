var expect = require('chai').expect,
  cp = require('child_process'),
  supertest = require('supertest')

var child

before(function (done) { // Start server
  child = cp.exec('node server.js', function (error, stdout, stderr) {
    expect(error).to.be.null
    if (error) console.log('exec error: ' + error)
  })
  setTimeout(done, 400)
})

describe('server.js', function () {
  it('must use requestHandler', function(done){
    var serverFile = require('path').join(__dirname, '..', 'server.js')
    var code = require('fs').readFileSync(serverFile).toString('utf-8')
    expect(code).to.contain('requestHandler')
    done()
  })
})

describe('server', function () {
  it('must respond with Hello World', function(done){
    supertest('http://localhost:3000').get('/')
      .end(function(error, response){
        expect(response.res.text).to.equal('Hello World\n')
        expect(response.res.statusCode).to.equal(200)
        var killResult = child.kill()
        expect(killResult).to.be.true
        done()
      })
  })
})

after(function(){ // Terminale server
  if (typeof child != 'undefined' && child && !child.killed) {
    var killResult = child.kill()
    expect(killResult).to.be.true
    expect(child.killed).to.be.true
  }
})

