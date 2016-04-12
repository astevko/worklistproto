/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.utils.MG2Log;

/**
 * @author efdj6eb
 *
 */
public class InterpretLabResultsView extends Composite {
    /**
     * logger
     */
    private static final MG2Log log = new MG2Log(InterpretLabResultsView.class);

  
    private static InterpretLabResultsViewUiBinder uiBinder = GWT.create(InterpretLabResultsViewUiBinder.class);

    interface InterpretLabResultsViewUiBinder extends UiBinder<Widget, InterpretLabResultsView> {
    }

    /**
     * Because this class has a default constructor, it can
     * be used as a binder template. In other words, it can be used in other
     * *.ui.xml files as follows:
     * <ui:UiBinder xmlns:ui="urn:ui:com.google.gwt.uibinder"
     *   xmlns:g="urn:import:**user's package**">
     *  <g:**UserClassName**>Hello!</g:**UserClassName>
     * </ui:UiBinder>
     * Note that depending on the widget that is used, it may be necessary to
     * implement HasHTML instead of HasText.
     */
    public InterpretLabResultsView() {
        log.info("InterpretLabResultsView()");
        initWidget(uiBinder.createAndBindUi(this));
    }

}
