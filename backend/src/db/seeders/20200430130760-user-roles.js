const { v4: uuid } = require('uuid');

module.exports = {
  /**
   * @param{import("sequelize").QueryInterface} queryInterface
   * @return {Promise<void>}
   */
  async up(queryInterface) {
    const createdAt = new Date();
    const updatedAt = new Date();

    /** @type {Map<string, string>} */
    const idMap = new Map();

    /**
     * @param {string} key
     * @return {string}
     */
    function getId(key) {
      if (idMap.has(key)) {
        return idMap.get(key);
      }
      const id = uuid();
      idMap.set(key, id);
      return id;
    }

    await queryInterface.bulkInsert('roles', [
      {
        id: getId('SuperAdmin'),
        name: 'Super Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('Administrator'),
        name: 'Administrator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('system_manager'),
        name: 'system_manager',
        createdAt,
        updatedAt,
      },

      {
        id: getId('lead_coordinator'),
        name: 'lead_coordinator',
        createdAt,
        updatedAt,
      },

      {
        id: getId('client_support'),
        name: 'client_support',
        createdAt,
        updatedAt,
      },

      {
        id: getId('marketing_specialist'),
        name: 'marketing_specialist',
        createdAt,
        updatedAt,
      },

      {
        id: getId('financial_analyst'),
        name: 'financial_analyst',
        createdAt,
        updatedAt,
      },
    ]);

    /**
     * @param {string} name
     */
    function createPermissions(name) {
      return [
        {
          id: getId(`CREATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `CREATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`READ_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `READ_${name.toUpperCase()}`,
        },
        {
          id: getId(`UPDATE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `UPDATE_${name.toUpperCase()}`,
        },
        {
          id: getId(`DELETE_${name.toUpperCase()}`),
          createdAt,
          updatedAt,
          name: `DELETE_${name.toUpperCase()}`,
        },
      ];
    }

    const entities = [
      'users',
      'appointments',
      'blogs',
      'contacts',
      'invoices',
      'leads',
      'roles',
      'permissions',
      'businesses',
      ,
    ];
    await queryInterface.bulkInsert(
      'permissions',
      entities.flatMap(createPermissions),
    );
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`READ_API_DOCS`),
        createdAt,
        updatedAt,
        name: `READ_API_DOCS`,
      },
    ]);
    await queryInterface.bulkInsert('permissions', [
      {
        id: getId(`CREATE_SEARCH`),
        createdAt,
        updatedAt,
        name: `CREATE_SEARCH`,
      },
    ]);

    await queryInterface.bulkUpdate(
      'roles',
      { globalAccess: true },
      { id: getId('SuperAdmin') },
    );

    await queryInterface.sequelize
      .query(`create table "rolesPermissionsPermissions"
(
"createdAt"           timestamp with time zone not null,
"updatedAt"           timestamp with time zone not null,
"roles_permissionsId" uuid                     not null,
"permissionId"        uuid                     not null,
primary key ("roles_permissionsId", "permissionId")
);`);

    await queryInterface.bulkInsert('rolesPermissionsPermissions', [
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('CREATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('UPDATE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('READ_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('CREATE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('READ_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('UPDATE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('DELETE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('CREATE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('READ_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('UPDATE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('DELETE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('READ_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('UPDATE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('READ_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('READ_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('CREATE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('READ_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('UPDATE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('DELETE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('READ_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('UPDATE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('READ_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('CREATE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('READ_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('UPDATE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('DELETE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('READ_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('CREATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('UPDATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('CREATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('UPDATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('UPDATE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('READ_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('CREATE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('READ_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('UPDATE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('DELETE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('READ_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('UPDATE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('READ_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('READ_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('CREATE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('READ_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('UPDATE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('DELETE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('CREATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('UPDATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('CREATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('UPDATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('UPDATE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('READ_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('system_manager'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('lead_coordinator'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('client_support'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('marketing_specialist'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('financial_analyst'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_BLOGS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_BLOGS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_BLOGS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('UPDATE_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_USERS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_USERS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_APPOINTMENTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_APPOINTMENTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_BLOGS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_BLOGS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_BLOGS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_BLOGS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_CONTACTS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_CONTACTS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_INVOICES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_INVOICES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_LEADS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_LEADS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_ROLES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_ROLES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_PERMISSIONS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_PERMISSIONS'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_BUSINESSES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_BUSINESSES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('UPDATE_BUSINESSES'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('DELETE_BUSINESSES'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('SuperAdmin'),
        permissionId: getId('CREATE_SEARCH'),
      },

      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('READ_API_DOCS'),
      },
      {
        createdAt,
        updatedAt,
        roles_permissionsId: getId('Administrator'),
        permissionId: getId('CREATE_SEARCH'),
      },
    ]);

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'SuperAdmin',
      )}' WHERE "email"='super_admin@flatlogic.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'Administrator',
      )}' WHERE "email"='admin@flatlogic.com'`,
    );

    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'system_manager',
      )}' WHERE "email"='client@hello.com'`,
    );
    await queryInterface.sequelize.query(
      `UPDATE "users" SET "app_roleId"='${getId(
        'lead_coordinator',
      )}' WHERE "email"='john@doe.com'`,
    );
  },
};
