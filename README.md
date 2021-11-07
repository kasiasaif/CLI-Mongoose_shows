# CLI-Mongoose_shows


Project created as the one of tasks on Bootcamp Master in Code Nation. Purpose : Create a CLI that allows users to store shows in a MongoDB database using mongoose.

Details for instruction:

Add new show with addShow : node path-of-file/app.js "add" --name="show name" --channel="channel name";

----> node src/app.js "add" --name="Talent" --channel="BBC" --time=12.35;

Read all show with readAll : node path-of-file/app.js "read all";

----> node src/app.js "read all"

Update show with updateShow: node path-of-file/app.js "update" --name="show name" --channel= new channel name ;

----> node src/app.js --name="Talent" --channel="ITV"

Update show with updateTime: node path-of-file/app.js "update" --name="show name" --time="new time" ;

----> node src/app.js --name="Talent" --time=15.55

Delete show with deleteShow :node path-of-file/app.js "delete" --name="show name";

----> node src/app.js "delete" --name="Talent"

Find show by name with findByName: node path-of-file/app.js "find by name" --name="show name";

---->node src/app.js "find by name" --name="Talent"

Find show by channel with findByChannel: node path-of-file/app.js "find by channel" --channel="channel name";

---->node src/app.js "find by channel" --channel="BBC"

Find show by show time with findByTime: node path-of-file/app.js "find by time" --time=time;

---->node src/app.js "find by time" --time=12.35
