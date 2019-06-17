if (typeof (SiebelAppFacade.NBDefaultFormAppletPR) === "undefined") {

  SiebelJS.Namespace("SiebelAppFacade.NBDefaultFormAppletPR");
  define("siebel/custom/NBDefaultFormAppletPR", ["siebel/phyrenderer", "siebel/custom/NBPR"],
    function () {
      SiebelAppFacade.NBDefaultFormAppletPR = (function () {

        function NBDefaultFormAppletPR(pm) {
          SiebelAppFacade.NBDefaultFormAppletPR.superclass.constructor.apply(this, arguments);
        }

        SiebelJS.Extend(NBDefaultFormAppletPR, SiebelAppFacade.PhysicalRenderer);

        NBDefaultFormAppletPR.prototype.destroyNexus = NBPR.destroyNexus;

        NBDefaultFormAppletPR.prototype.initializeNexus = NBPR.initializeNexus;

        NBDefaultFormAppletPR.prototype.removeHtml = NBPR.removeHtml;

        NBDefaultFormAppletPR.prototype.NBInit = NBPR.init;

        NBDefaultFormAppletPR.prototype.Init = function () {
          SiebelAppFacade.NBDefaultFormAppletPR.superclass.Init.apply(this, arguments);
        }

        NBDefaultFormAppletPR.prototype.ShowUI = function () { }

        NBDefaultFormAppletPR.prototype.BindData = function (bRefresh) { }

        NBDefaultFormAppletPR.prototype.BindEvents = function () { }

        NBDefaultFormAppletPR.prototype.EndLife = function () {
          SiebelAppFacade.NBDefaultFormAppletPR.superclass.EndLife.apply(this, arguments);
        }

        return NBDefaultFormAppletPR;
      }()
      );
      return "SiebelAppFacade.NBDefaultFormAppletPR";
    })
}