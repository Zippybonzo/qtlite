const { Instance } = require('./instances');


class InstanceManager {
    static allInstanceManagers = [];
    constructor() {
        // Make it so there can only be one instancemanager
        if (InstanceManager.allInstanceManagers.length > 0) {
            InstanceManager.allInstanceManagers = [];
        }
        InstanceManager.allInstanceManagers.push(this);
    }
    // Instance CRUD ops

    // Create
    createInstance(instancename, instancetype, instancestate) {
        // Create a new instance 
        return new Instance(instancename, instancetype, instancestate);
    }
    quickCreateInstance(instancetype) {
        // Find an available name
        let instancename = `instance-${Instance.allinstances.length + 1}`;
        // Default to stopped
        let instancestate = "stopped";
        // Create a new instance and start it (for the autoscaler)
        return new Instance(instancename, instancetype, instancestate);
    }
    // Read
    getInstances() {
        return Instance.allinstances;
    }
    
    getInstanceByName(instancename) {
        return Instance.allinstances.find(instance => instance.instancename === instancename);
    }
    // Update
    updateInstanceName(instancename, newname) {
        let instance = this.getInstanceByName(instancename);
        instance.instancename = newname;
        return instance;
    }
    startInstance(instancename) {
        let instance = this.getInstanceByName(instancename);
        instance.startInstance();
        return instance;
    }
    restartInstance(instancename) {
        let instance = this.getInstanceByName(instancename);
        instance.restartInstance();
        return instance;
    }
    stopInstance(instancename) {
        let instance = this.getInstanceByName(instancename);
        instance.stopInstance();
        return instance;
    }
    // Delete
    removeInstance(instancename) {
        let instance = this.getInstanceByName(instancename);
        instance.removeInstance();
        return instance;
    }
    removeAllInstances() {
        this.getInstances.array.forEach(instance => {
            instance.removeInstance();
        });
    }
}

module.exports =  InstanceManager;
