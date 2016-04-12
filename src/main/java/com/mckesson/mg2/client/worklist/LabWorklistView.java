/**
 * 
 */
package com.mckesson.mg2.client.worklist;

import com.google.gwt.core.client.GWT;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.googlecode.mgwt.dom.client.event.tap.TapEvent;
import com.googlecode.mgwt.dom.client.event.tap.TapHandler;
import com.googlecode.mgwt.dom.client.recognizer.longtap.LongTapEvent;
import com.googlecode.mgwt.dom.client.recognizer.longtap.LongTapHandler;
import com.googlecode.mgwt.dom.client.recognizer.swipe.SwipeEndEvent;
import com.googlecode.mgwt.dom.client.recognizer.swipe.SwipeEndHandler;
import com.googlecode.mgwt.ui.client.widget.touch.TouchPanel;
import com.mckesson.mg2.client.SampleData;
import com.mckesson.mg2.client.SampleData.LabWorklist;
import com.mckesson.mg2.client.patient.InterpretLabResultsView;
import com.mckesson.mg2.client.utils.MG2Log;

/**
 * @author efdj6eb
 */
public class LabWorklistView extends WorklistView {
    interface LabWorklistViewUiBinder extends UiBinder<Widget, LabWorklistView> {
    };

    interface ListItem extends SafeHtmlTemplates {
        @Template("<div class='item_outer'> <div class='item'> <img class='avatar' src='{0}'> <div class='pad'> <div class='primary'>{1}</div> <div class='secondary'>{2}</div> <div class='secondary dim'>{3}</div> </div> "
                + "<iron-icon icon='chevron-right'></iron-icon>" 
                + " </div> </div>")
        SafeHtml template(String avatar, String primary, String MRN_DOB, String tertiary);
    }

    static final ListItem ITEM = GWT.create(ListItem.class);

    /**
     * logger
     */
    private static final MG2Log log = new MG2Log(LabWorklistView.class);

    private final LabWorklistViewUiBinder uiBinder = GWT.create(LabWorklistViewUiBinder.class);

    /**
     * lab work list
     */
    @UiField
    HTMLPanel list;

    private final TapHandler itemTap = new TapHandler() {

        @Override
        public void onTap(final TapEvent event) {
            log.info("Item tap");
            gotoInterpretLabResults();
        }
    };

    private final LongTapHandler itemLongTap = new LongTapHandler() {
        @Override
        public void onLongTap(final LongTapEvent event) {
            log.info("Item long tap");
            gotoLabWorklistBatchView();
        }
    };

    private final SwipeEndHandler itemSwipe = new SwipeEndHandler() {

        @Override
        public void onSwipeEnd(final SwipeEndEvent event) {
            log.info("item swipe");
            gotoLabWorklistBatchView();
        }
    };

    public LabWorklistView() {
        initWidget(uiBinder.createAndBindUi(this));
        log.info("LabWorklistView()");
        populateList(SampleData.getLabWorklists());
    }

    /**
     * 
     */
    protected void gotoInterpretLabResults() {
        log.info("gotoInterpretLabResults()");
        clear();
        // clicked tab
        final InterpretLabResultsView newView = GWT.create(InterpretLabResultsView.class);
        RootPanel.get().add(newView);
    }

    protected void gotoLabWorklistBatchView() {
        log.info("gotoLabWorklistBatchView()");
        // clicked tab
        final LabWorklistBatchView newView = GWT.create(LabWorklistBatchView.class);
        clear();
        RootPanel.get().add(newView);
    }

    /*
     * (non-Javadoc)
     * @see com.mckesson.mg2.client.worklist.WorkliskView#initWidget(com.google.gwt.user.client.ui.Widget)
     */
    @Override
    protected void initWidget(final Widget widget) {
        super.initWidget(widget);
    }

    /*
     * (non-Javadoc)
     * @see com.google.gwt.user.client.ui.Widget#onLoad()
     */
    @Override
    protected void onLoad() {
        super.onLoad();
    }

    /**
     * @param labWorklists
     */
    protected void populateList(final JsArray<LabWorklist> labWorklists) {
        // create paper cards for eachitem in the list
        for (int i = 0; i < labWorklists.length(); i++) {
            final LabWorklist labWorklist = labWorklists.get(i);
            final SafeHtml html =
                    ITEM.template(labWorklist.avatar(), labWorklist.patientDisplayString(), labWorklist.patGenderAgeDobMrn(),
                            labWorklist.resultName());
            final TouchPanel panel = new TouchPanel();
            panel.addTapHandler(itemTap);
            panel.addLongTapHandler(itemLongTap);
            panel.addSwipeEndHandler(itemSwipe);
            panel.add(new HTML(html));
            list.add(panel);
        }

    }
}
