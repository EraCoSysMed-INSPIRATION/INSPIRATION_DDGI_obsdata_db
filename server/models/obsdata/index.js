const obsdb_config = require("../../config/obsdb_config.json");
const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const sequelize = new Sequelize(
  obsdb_config.development.database,
  obsdb_config.development.user,
  obsdb_config.development.password,
  {
    host: obsdb_config.development.host,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const obs_db = {};

obs_db.Sequelize = Sequelize;
obs_db.sequelize = sequelize;

// Define all models
fs.readdirSync(__dirname + "/models")
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname + "/models", file))(
      sequelize,
      Sequelize.DataTypes
    )
    obs_db[model.name] = model
  })

Object.keys(obs_db).forEach((modelName) => {
  if (obs_db[modelName].associate) {
    obs_db[modelName].associate(db)
  }
})

// Define model relationships
obs_db.CompoundsAndAnalytes.hasOne(obs_db.MolecularWeight, {
  foreignKey: {
    name: "compound_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Reference.hasMany(obs_db.Profile, {
  foreignKey: {
    name: "reference_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.CompoundsAndAnalytes.hasMany(obs_db.DDICompoundMatcher, {
  foreignKey: {
    name: "compound_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Profile.hasMany(obs_db.DDICompoundMatcher, {
  foreignKey: {
    name: "profile_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Profile.hasMany(obs_db.InteractionProfileMatcher, {
  foreignKey: {
    name: "effect_profile",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.InteractionProfileMatcher.hasMany(obs_db.InteractionRatio, {
  foreignKey: {
    name: "interaction_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.CompoundsAndAnalytes.hasMany(obs_db.InteractionRatio, {
  foreignKey: {
    name: "analyte_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Profile.hasMany(obs_db.DemographicMatcher, {
  foreignKey: {
    name: "profile_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Demographic.hasMany(obs_db.DemographicMatcher, {
  foreignKey: {
    name: "demographic_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Profile.hasMany(obs_db.GeneticMatcher, {
  foreignKey: {
    name: "profile_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Genetic.hasMany(obs_db.GeneticMatcher, {
  foreignKey: {
    name: "genetic_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.CompoundsAndAnalytes.hasMany(obs_db.AdministrationProtocol, {
  foreignKey: {
    name: "compound_administered_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Profile.hasMany(obs_db.AdministrationProtocolMatcher, {
  foreignKey: {
    name: "profile_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.AdministrationProtocol.hasMany(obs_db.AdministrationProtocolMatcher, {
  foreignKey: {
    name: "administration_protocol_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Profile.hasMany(obs_db.MealProtocolMatcher, {
  foreignKey: {
    name: "profile_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.MealProtocol.hasMany(obs_db.MealProtocolMatcher, {
  foreignKey: {
    name: "meal_protocol_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.CompoundsAndAnalytes.hasMany(obs_db.Observation, {
  foreignKey: {
    name: "compound_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Profile.hasMany(obs_db.ObservationMatcher, {
  foreignKey: {
    name: "profile_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Observation.hasMany(obs_db.ObservationMatcher, {
  foreignKey: {
    name: "compound_observation_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.CompoundsAndAnalytes.hasMany(obs_db.NCAValue, {
  foreignKey: {
    name: "compound_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.Profile.hasMany(obs_db.NCAMatcher, {
  foreignKey: {
    name: "profile_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
obs_db.NCAValue.hasMany(obs_db.NCAMatcher, {
  foreignKey: {
    name: "nca_value_id",
    onDelete: "cascade",
    onUpdate: "cascade",
  },
});
// EVENTS
sequelize.query('SET GLOBAL event_scheduler = ON;')
sequelize.query('CREATE EVENT IF NOT EXISTS cleanRequests ON SCHEDULE EVERY 5 MINUTE DO DELETE FROM stored_requests WHERE createdAt < (NOW() - INTERVAL 5 MINUTE);')

module.exports = obs_db;