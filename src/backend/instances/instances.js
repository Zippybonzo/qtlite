class Instance {
    static allInstances = [];
    constructor(instancename, instancetype, instancestate) {
        this.instancename = instancename;
        this.instancetype = instancetype;
        this.instancestate = instancestate;
        Instance.allInstances.push(this);
    }

    startInstance() {
        // code to restart instance
    }

    restartInstance() {
        // code to restart instance
    }

    instanceStatus() {
        // code to get instance status
    }

    stopInstance() {
        const allinstances = Instance.allInstances.indexOf(this);
        if (allinstances > -1) {
            Instance.allInstances.splice(allinstances, 1);
        }
    }

    removeInstance() {
        // code to remove instance
    }
}

module.exports =  Instance;