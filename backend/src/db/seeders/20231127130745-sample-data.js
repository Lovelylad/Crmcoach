const db = require('../models');
const Users = db.users;

const Appointments = db.appointments;

const Blogs = db.blogs;

const Contacts = db.contacts;

const Invoices = db.invoices;

const Leads = db.leads;

const Businesses = db.businesses;

const AppointmentsData = [
  {
    start_time: new Date('2023-11-01T10:00:00'),

    end_time: new Date('2023-11-01T11:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2023-11-02T14:00:00'),

    end_time: new Date('2023-11-02T15:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    start_time: new Date('2023-11-03T09:00:00'),

    end_time: new Date('2023-11-03T10:00:00'),

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const BlogsData = [
  {
    title: 'The Power of Positive Thinking',

    content: 'Exploring the benefits of maintaining a positive mindset.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Effective Time Management',

    content: 'Tips and strategies for managing your time effectively.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    title: 'Building Resilience',

    content: 'How to develop resilience in challenging times.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'Tom',

    last_name: 'Hanks',

    email: 'tom.hanks@example.com',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Emma',

    last_name: 'Watson',

    email: 'emma.watson@example.com',

    // type code here for "relation_one" field
  },

  {
    first_name: 'Chris',

    last_name: 'Evans',

    email: 'chris.evans@example.com',

    // type code here for "relation_one" field
  },
];

const InvoicesData = [
  {
    amount: 150,

    status: 'paid',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    amount: 200,

    status: 'paid',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    amount: 250,

    status: 'pending',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Alice Green',

    status: 'converted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Bob White',

    status: 'qualified',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Charlie Black',

    status: 'new',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const BusinessesData = [
  {
    name: 'Life Coaching Inc.',
  },

  {
    name: 'Wellness Consulting Group',
  },

  {
    name: 'Growth Mindset Co.',
  },
];

// Similar logic for "relation_many"

async function associateUserWithBusinesse() {
  const relatedBusinesse0 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setBusinesse) {
    await User0.setBusinesse(relatedBusinesse0);
  }

  const relatedBusinesse1 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setBusinesse) {
    await User1.setBusinesse(relatedBusinesse1);
  }

  const relatedBusinesse2 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setBusinesse) {
    await User2.setBusinesse(relatedBusinesse2);
  }
}

async function associateAppointmentWithClient() {
  const relatedClient0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setClient) {
    await Appointment0.setClient(relatedClient0);
  }

  const relatedClient1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setClient) {
    await Appointment1.setClient(relatedClient1);
  }

  const relatedClient2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setClient) {
    await Appointment2.setClient(relatedClient2);
  }
}

async function associateAppointmentWithLife_coach() {
  const relatedLife_coach0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setLife_coach) {
    await Appointment0.setLife_coach(relatedLife_coach0);
  }

  const relatedLife_coach1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setLife_coach) {
    await Appointment1.setLife_coach(relatedLife_coach1);
  }

  const relatedLife_coach2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setLife_coach) {
    await Appointment2.setLife_coach(relatedLife_coach2);
  }
}

async function associateAppointmentWithBusinesse() {
  const relatedBusinesse0 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setBusinesse) {
    await Appointment0.setBusinesse(relatedBusinesse0);
  }

  const relatedBusinesse1 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setBusinesse) {
    await Appointment1.setBusinesse(relatedBusinesse1);
  }

  const relatedBusinesse2 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setBusinesse) {
    await Appointment2.setBusinesse(relatedBusinesse2);
  }
}

async function associateBlogWithAuthor() {
  const relatedAuthor0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Blog0 = await Blogs.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Blog0?.setAuthor) {
    await Blog0.setAuthor(relatedAuthor0);
  }

  const relatedAuthor1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Blog1 = await Blogs.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Blog1?.setAuthor) {
    await Blog1.setAuthor(relatedAuthor1);
  }

  const relatedAuthor2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Blog2 = await Blogs.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Blog2?.setAuthor) {
    await Blog2.setAuthor(relatedAuthor2);
  }
}

async function associateBlogWithBusinesse() {
  const relatedBusinesse0 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Blog0 = await Blogs.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Blog0?.setBusinesse) {
    await Blog0.setBusinesse(relatedBusinesse0);
  }

  const relatedBusinesse1 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Blog1 = await Blogs.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Blog1?.setBusinesse) {
    await Blog1.setBusinesse(relatedBusinesse1);
  }

  const relatedBusinesse2 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Blog2 = await Blogs.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Blog2?.setBusinesse) {
    await Blog2.setBusinesse(relatedBusinesse2);
  }
}

async function associateContactWithBusinesse() {
  const relatedBusinesse0 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setBusinesse) {
    await Contact0.setBusinesse(relatedBusinesse0);
  }

  const relatedBusinesse1 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setBusinesse) {
    await Contact1.setBusinesse(relatedBusinesse1);
  }

  const relatedBusinesse2 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setBusinesse) {
    await Contact2.setBusinesse(relatedBusinesse2);
  }
}

async function associateInvoiceWithClient() {
  const relatedClient0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Invoice0 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Invoice0?.setClient) {
    await Invoice0.setClient(relatedClient0);
  }

  const relatedClient1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Invoice1 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Invoice1?.setClient) {
    await Invoice1.setClient(relatedClient1);
  }

  const relatedClient2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Invoice2 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Invoice2?.setClient) {
    await Invoice2.setClient(relatedClient2);
  }
}

async function associateInvoiceWithBusinesse() {
  const relatedBusinesse0 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Invoice0 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Invoice0?.setBusinesse) {
    await Invoice0.setBusinesse(relatedBusinesse0);
  }

  const relatedBusinesse1 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Invoice1 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Invoice1?.setBusinesse) {
    await Invoice1.setBusinesse(relatedBusinesse1);
  }

  const relatedBusinesse2 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Invoice2 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Invoice2?.setBusinesse) {
    await Invoice2.setBusinesse(relatedBusinesse2);
  }
}

async function associateLeadWithOwner() {
  const relatedOwner0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOwner) {
    await Lead0.setOwner(relatedOwner0);
  }

  const relatedOwner1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOwner) {
    await Lead1.setOwner(relatedOwner1);
  }

  const relatedOwner2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOwner) {
    await Lead2.setOwner(relatedOwner2);
  }
}

async function associateLeadWithBusinesse() {
  const relatedBusinesse0 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setBusinesse) {
    await Lead0.setBusinesse(relatedBusinesse0);
  }

  const relatedBusinesse1 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setBusinesse) {
    await Lead1.setBusinesse(relatedBusinesse1);
  }

  const relatedBusinesse2 = await Businesses.findOne({
    offset: Math.floor(Math.random() * (await Businesses.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setBusinesse) {
    await Lead2.setBusinesse(relatedBusinesse2);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Appointments.bulkCreate(AppointmentsData);

    await Blogs.bulkCreate(BlogsData);

    await Contacts.bulkCreate(ContactsData);

    await Invoices.bulkCreate(InvoicesData);

    await Leads.bulkCreate(LeadsData);

    await Businesses.bulkCreate(BusinessesData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithBusinesse(),

      await associateAppointmentWithClient(),

      await associateAppointmentWithLife_coach(),

      await associateAppointmentWithBusinesse(),

      await associateBlogWithAuthor(),

      await associateBlogWithBusinesse(),

      await associateContactWithBusinesse(),

      await associateInvoiceWithClient(),

      await associateInvoiceWithBusinesse(),

      await associateLeadWithOwner(),

      await associateLeadWithBusinesse(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('appointments', null, {});

    await queryInterface.bulkDelete('blogs', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('invoices', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('businesses', null, {});
  },
};
