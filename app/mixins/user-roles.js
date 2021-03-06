import Ember from 'ember';

export const PREDEFINED_USER_ROLES = [
  { name: 'Data Entry', roles: ['Data Entry', 'user'], defaultRoute: 'patients' },
  { name: 'Doctor', roles: ['Doctor', 'user'], defaultRoute: 'patients'  },
  { name: 'Finance', roles: ['Finance', 'user'], defaultRoute: 'invoices.index'  },
  { name: 'Finance Manager', roles: ['Finance Manager', 'user'], defaultRoute: 'invoices.index' },
  { name: 'Hospital Administrator', roles: ['Hospital Administrator', 'user'], defaultRoute: 'invoices.index' },
  { name: 'Inventory Manager', roles: ['Inventory Manager', 'user'], defaultRoute: 'inventory' },
  { name: 'Imaging Technician', roles: ['Imaging Technician', 'user'], defaultRoute: 'imaging.index' },
  { name: 'Lab Technician', roles: ['Lab Technician', 'user'], defaultRoute: 'labs.index' },
  { name: 'Medical Records Officer', roles: ['Medical Records Officer', 'user'], defaultRoute: 'patients' },
  { name: 'Nurse', roles: ['Nurse', 'user'], defaultRoute: 'patients' },
  { name: 'Nurse Manager', roles: ['Nurse Manager', 'user'], defaultRoute: 'patients' },
  { name: 'Patient Administration', roles: ['Patient Administration', 'user'], defaultRoute: 'patients' },
  { name: 'Pharmacist', roles: ['Pharmacist', 'user'], defaultRoute: 'medication.index' },
  { name: 'Social Worker', roles: ['Social Worker', 'user'], defaultRoute: 'patients' },
  { name: 'System Administrator', roles: ['System Administrator', 'admin', 'user'], defaultRoute: 'patients' },
  { name: 'User Administrator', roles: ['User Administrator', 'admin', 'user'], defaultRoute: 'users' }
];

export default Ember.Mixin.create({
  userRoles: PREDEFINED_USER_ROLES,

  findUserRole(name) {
    return this.userRoles.findBy('name', name);
  }
});
