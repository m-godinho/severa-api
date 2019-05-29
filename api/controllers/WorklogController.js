/**
 * WorklogController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  find: async function (req, res) {
    if (req.param("user") && req.param("user") != 'null') {
      var user = req.param("user");
    }

    if (req.param("month") && req.param("month") != 'null') {
      var month = req.param("month");
    }

    if (req.param("date") && req.param("date") != 'null') {
      var date = req.param("date");
    }

    var SQL_WORKLOG_ALL = "select * from worklog";

    var SQL_WORKLOG_BY_USER =
      "select * from worklog WHERE worklog.user = " + user;

    var SQL_WORKLOG_BY_USER_AND_MONTH_INDEX =
      "select * from worklog where to_char(worklog.date::date, 'MM')::int = " +
      month +
      " and worklog.user = " +
      user;

    var SQL_WORKLOG_BY_USER_AND_DATE =
      "select * " +
      "  from worklog " +
      " where worklog.date = '" + date + "'" +
      "   and worklog.user = " + user;

    var sql = "";

    if (user != null && month != null) {
      sql = SQL_WORKLOG_BY_USER_AND_MONTH_INDEX;
    } else if (user != null && date != null) {
      sql = SQL_WORKLOG_BY_USER_AND_DATE;
    } else if (user != null) {
      sql = SQL_WORKLOG_BY_USER;
    } else {
      sql = SQL_WORKLOG_ALL;
    }

    await sails.getDatastore().sendNativeQuery(sql, function (err, rawResult) {
      if (err) {
        return res.serverError(err);
      }
      return res.send(rawResult.rows);
    });
  }
};
