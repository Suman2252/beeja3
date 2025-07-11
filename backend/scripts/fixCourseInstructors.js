const mongoose = require('mongoose');
const Course = require('../models/course');
const User = require('../models/user');

async function fixCourseInstructors() {
  try {
    await mongoose.connect('mongodb://localhost:27017/learnhub', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const instructor = await User.findOne({ accountType: 'Instructor' }).lean();
    if (!instructor) {
      console.error('No instructor found');
      process.exit(1);
    }

    const result = await Course.updateMany(
      {},
      { $set: { instructor: instructor._id } }
    );

    console.log(`Updated ${result.modifiedCount} courses to instructor ID: ${instructor._id}`);

    await mongoose.disconnect();
  } catch (error) {
    console.error('Error updating courses:', error);
    process.exit(1);
  }
}

fixCourseInstructors();
