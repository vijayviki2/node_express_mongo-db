// dns = domain name system(server) represent ip address

const dns = require('dns')

dns.lookup('www.be-practical.com', function (err,address,family){
   if(err) throw err;
    console.log('address =', address)
    console.log('family =', family)

    //  lookup service
    dns.lookupService(address,22, function (err,host,service) {
        if(err) throw err;
        console.log('host =', host)
        console.log('service =', service)
    })
})

// www.facebook.com
// address=152.240.23.35
// family=4
// host =  edge-star-mini-shv-01-maa2.facebook.com
// service = ssh (secure/shell/ secure socket shell) -> network protocall

// www.be-practical.com
// address=3.21.100.116
// family = 4
// host = ec2-3-21-100-166.us-east-2.compute.amazonaws.com
// service =ssh