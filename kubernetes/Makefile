all:
	oc delete deployment hitcounter-deployment || true
	oc delete service hitcounter || true
	oc delete ingress hitcounter || true
	oc create -f hitcounter-deployment.yml
	#oc create -f hitcounter-service.yml
